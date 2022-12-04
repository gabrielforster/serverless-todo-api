import { Model } from "mongoose";

import { TodoSchema } from "../schema/todo";

export const Todo = new Model("Todo", TodoSchema);