import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

import { connectToDB } from "../database";
import { Todo } from "../database/model/todo";
import { get } from "../utils"

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  
  connectToDB();

  const body = JSON.parse(event.body)

  const todo = new Todo({
    title: get(body, "title"),
    description: get(body, "description"),
    completed: get(body, "completed"),
    createdAt: new Date().toISOString(),
  });

  const savedTodo = await todo.save();

  return {
    statusCode: 200,
    body: JSON.stringify({
      todo: savedTodo,
    }),
  };
}