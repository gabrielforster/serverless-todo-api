import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

import { connectToDB } from "../database";
import { Todo } from "../database/model/todo";

import { get } from "../utils";

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {

  connectToDB();

  const id = get(event, "pathParameters.todoId")

  const todo = await Todo.findById(id);

  return {
    statusCode: 200,
    body: JSON.stringify({
      todo: todo,
    }),
  };
}