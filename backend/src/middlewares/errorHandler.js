const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Default error response
  const response = {
    success: false,
    message: err.message || 'Erro interno do servidor',
  };

  // Handle validation errors
  if (err.name === 'SequelizeValidationError') {
    response.message = 'Erro de validação';
    response.errors = err.errors.map(e => ({
      field: e.path,
      message: e.message
    }));
    return res.status(StatusCodes.BAD_REQUEST).json(response);
  }

  // Handle not found errors
  if (err.name === 'NotFoundError') {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: err.message || 'Recurso não encontrado'
    });
  }

  // Handle duplicate key errors
  if (err.name === 'SequelizeUniqueConstraintError') {
    response.message = 'Já existe um registro com esses dados';
    response.errors = err.errors.map(e => ({
      field: e.path,
      message: e.message
    }));
    return res.status(StatusCodes.CONFLICT).json(response);
  }

  // Default error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Ocorreu um erro inesperado',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;