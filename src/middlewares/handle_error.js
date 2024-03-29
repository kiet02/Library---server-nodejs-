import createError from "http-errors";

export const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
    return res.status(error.status).json({
        err:1,
        mes: error.message
    })
}

export const internalSreverError = (res) => {
    const error = createError.InternalServerError();
      return res.status(error.status).json({
          err:"handle_error internalServerError",
          mes: error.message
      })
  }

  export const notFound = (req,res) => {
    const error = createError.NotFound("This found not defined");
      return res.status(error.status).json({
          err:1,
          mes: error.message
      })
  }