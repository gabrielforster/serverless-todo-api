import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda"

import { get as getParamsFromEvent } from "deep-object-js"

export const handler = async (
  event: APIGatewayEvent
):Promise<APIGatewayProxyResult> => {  

  const name = getParamsFromEvent(event, "pathParameters.name")

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name ?? "World"}!`,
    })
  }
}