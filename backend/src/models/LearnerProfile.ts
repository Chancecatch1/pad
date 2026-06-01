/* CHANGE NOTE
Why: Make tutor memory feel more like a human tutor's memory
What changed: Added durable learning insights and expiring episodic notes to learner memory
Behaviour/Assumptions: Learning insights persist as skill evidence, while casual context can naturally fade
Rollback: rm src/models/LearnerProfile.ts
- mj
*/

import mongoose from "mongoose";

const LearningInsightSchema = new mongoose.Schema(
  {
    key: String,
    kind: { type: String, default: "correction_pattern" },
    text: String,
    example: String,
    strength: { type: Number, default: 1 },
    evidenceCount: { type: Number, default: 1 },
    firstSeenAt: Date,
    lastSeenAt: Date,
  },
  { _id: false }
);

const EpisodicNoteSchema = new mongoose.Schema(
  {
    key: String,
    kind: { type: String, default: "conversation_context" },
    text: String,
    salience: { type: Number, default: 0.5 },
    createdAt: Date,
    lastSeenAt: Date,
    expiresAt: Date,
  },
  { _id: false }
);

const TutorMemorySchema = new mongoose.Schema(
  {
    summary: String,
    recurringErrors: { type: [String], default: [] },
    usefulPhrases: { type: [String], default: [] },
    recentTopics: { type: [String], default: [] },
    lastFeedback: { type: [String], default: [] },
    levelEvidence: { type: [String], default: [] },
    learningInsights: { type: [LearningInsightSchema], default: [] },
    episodicNotes: { type: [EpisodicNoteSchema], default: [] },
    estimatedLevel: { type: String, default: "B1" },
    turnCount: { type: Number, default: 0 },
    sessionCount: { type: Number, default: 0 },
  },
  { _id: false }
);

const LearnerProfileSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true, trim: true },
    normalizedName: { type: String, required: true, unique: true, index: true },
    pinHash: { type: String, required: true },
    pinSalt: { type: String, required: true },
    level: { type: String, default: "B1" },
    learningGoal: { type: String, default: "" },
    interests: { type: [String], default: [] },
    memory: { type: TutorMemorySchema, default: () => ({}) },
    lastPracticedAt: Date,
  },
  { timestamps: true }
);

export const LearnerProfile =
  mongoose.models.LearnerProfile || mongoose.model("LearnerProfile", LearnerProfileSchema);
