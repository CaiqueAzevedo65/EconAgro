const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary');

// Configuração do storage do Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'econagro/products',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [
      { width: 800, height: 600, crop: 'limit' },
      { quality: 'auto' }
    ],
    public_id: (req, file) => {
      // Gerar nome único para o arquivo
      const uniqueName = `product_${Date.now()}_${Math.round(Math.random() * 1E9)}`;
      return uniqueName;
    }
  }
});

// Configuração do multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB máximo
  },
  fileFilter: (req, file, cb) => {
    // Verificar tipo de arquivo
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos de imagem são permitidos'), false);
    }
  }
});

// Middleware para upload único
const uploadSingle = upload.single('image');

// Middleware para múltiplos uploads (futuro)
const uploadMultiple = upload.array('images', 5);

// Middleware personalizado para tratamento de erros de upload
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'Arquivo muito grande. Tamanho máximo: 5MB'
      });
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        success: false,
        message: 'Campo de arquivo inesperado'
      });
    }
  }
  
  if (err.message === 'Apenas arquivos de imagem são permitidos') {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  
  next(err);
};

module.exports = {
  uploadSingle,
  uploadMultiple,
  handleUploadError
};
