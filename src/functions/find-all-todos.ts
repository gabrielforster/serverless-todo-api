import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda"

import { connectToDB } from "../database"
import { Todo } from "../database/model/todo"

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  
    connectToDB()
  
    const todos = await Todo.find()
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        todos: todos,
      }),
    }
}