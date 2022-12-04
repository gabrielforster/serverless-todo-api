import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { get as getParamsFromEvent } from "deep-object-js";

import { connectToDB } from "../database";
import { Todo } from "../database/model/todo";

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const name = getParamsFromEvent(event, "pathParameters.name");
  
  await connectToDB();

  console.log(event.body)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name ?? "World"}!`,
    }),
  };
}