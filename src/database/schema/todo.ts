import { Schema } from "mongoose"

export const TodoSchema = new Schema({
  title: { type: String },
  description:  { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, required: false, default: new Date().toISOString() }
})
