const { StatusCodes } = require('http-status-codes');
const { ApiError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  const isDev = process.env.NODE_ENV !== 'production';

  // ApiError (erros operacionais da aplicação)
  if (err instanceof ApiError || err.isOperational) {
    return res.status(err.statusCode || StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message,
      ...(err.errors ? { errors: err.errors } : {}),
      ...(isDev && { stack: err.stack })
    });
  }

  // Mongoose: ValidationError
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors || {}).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: 'Erro de validação',
      errors,
      ...(isDev && { stack: err.stack })
    });
  }

  // Mongoose: CastError (ex.: ObjectId inválido)
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'ID inválido',
      ...(isDev && { stack: err.stack })
    });
  }

  // Mongoose: Duplicate key
  if (err.code === 11000) {
    const fields = err.keyValue || {};
    const errors = Object.keys(fields).map((field) => ({
      field,
      message: 'Valor duplicado',
    }));
    return res.status(StatusCodes.CONFLICT).json({
      success: false,
      message: 'Já existe um registro com esses dados',
      errors,
      ...(isDev && { stack: err.stack })
    });
  }

  // Fallback: erro interno
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Ocorreu um erro inesperado',
    ...(isDev && { stack: err.stack })
  });
};

module.exports = errorHandler;