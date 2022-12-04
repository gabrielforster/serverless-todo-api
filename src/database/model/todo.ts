import { Model } from "mongoose";

import { TodoSchema } from "../schema/todo";

export const TodoModel = new Model("Todo", TodoSchema);