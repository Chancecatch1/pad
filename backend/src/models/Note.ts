import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  { title: { type: String, required: true }, body: String },
  { timestamps: true }
);

export const Note =
  mongoose.models.Note || mongoose.model("Note", NoteSchema);