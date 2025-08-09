import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { Note } from "./models/Note";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const MONGODB_URI = process.env.MONGODB_URI as string;

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
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