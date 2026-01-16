import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { Note } from "./models/Note";
import { ChatSession } from "./models/Chat";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const MONGODB_URI = process.env.MONGODB_URI as string;
const ALLOWED_ORIGINS = (process.env.CORS_ORIGIN || "http://localhost:3000,https://pineatdawn.me").split(",").map((s) => s.trim());
app.use(cors({ origin: ALLOWED_ORIGINS, credentials: true }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/notes", async (_req, res) => {
  const notes = await Note.find().lean();
  res.json(notes);
});

app.post("/notes", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (e) {
    res.status(400).json({ error: "invalid payload" });
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const result = await Note.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "not_found" });
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ error: "invalid_id" });
  }
});

// 세션 목록
app.get("/chat/sessions", async (_req, res) => {
  const list = await ChatSession.find().sort({ updatedAt: -1 }).lean();
  res.json(list);
});

// 세션 생성
app.post("/chat/sessions", async (req, res) => {
  const { title, clientId } = req.body || {};
  const sess = await ChatSession.create({ title, clientId, messages: [] });
  res.status(201).json(sess);
});

// 세션 단건 조회
app.get("/chat/sessions/:id", async (req, res) => {
  const sess = await ChatSession.findById(req.params.id).lean();
  if (!sess) return res.status(404).json({ error: "not_found" });
  res.json(sess);
});

// 메시지 추가
app.post("/chat/sessions/:id/messages", async (req, res) => {
  const { role, text, correction, explanation } = req.body || {};
  if (!role || !text) return res.status(400).json({ error: "invalid_payload" });

  const sess = await ChatSession.findByIdAndUpdate(
    req.params.id,
    { $push: { messages: { role, text, correction, explanation } } },
    { new: true }
  );
  if (!sess) return res.status(404).json({ error: "not_found" });
  res.status(201).json(sess);
});

async function start() {
  try {
    if (!MONGODB_URI) throw new Error("MONGODB_URI missing");
    await connectDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`[server] listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("[server] failed to start:", err);
    process.exit(1);
  }
}

start();