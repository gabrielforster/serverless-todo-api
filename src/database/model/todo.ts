import mongoose from "mongoose";

import { TodoSchema } from "../schema/todo";

export const Todo = mongoose.model("Todo", TodoSchema);