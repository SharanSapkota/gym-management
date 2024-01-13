import {
    ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';

const httpResponse = {
  errorHandler(response: any, error: any) {
    response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message || null, ...error })
  },
  unAuthorized(response: any, error: any) {
    response.status(error.statusCode || StatusCodes.UNAUTHORIZED).send({ message: ReasonPhrases.UNAUTHORIZED })
  },
  success(response: any, data: any) {
    response.status(StatusCodes.OK).send(data)
  },
  badRequest(response: any, error: any) {
    response.status(StatusCodes.BAD_REQUEST).send({message: ReasonPhrases.BAD_REQUEST})
  },
  notFound(response: any) {
    response.status(StatusCodes.NOT_FOUND).send({message: ReasonPhrases.NOT_FOUND})
  }
}

export default httpResponse

