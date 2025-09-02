const cloudinary = require('cloudinary').v2;

// Configuração do Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Função para testar conexão com Cloudinary
const testCloudinaryConnection = async () => {
  try {
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary conectado com sucesso:', result);
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar com Cloudinary:', error.message);
    return false;
  }
};

// Função para upload de imagem
const uploadToCloudinary = (file, folder = 'econagro/products') => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, {
      folder: folder,
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      transformation: [
        { width: 800, height: 600, crop: 'limit' },
        { quality: 'auto' }
      ]
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

// Função para deletar imagem
const deleteFromCloudinary = (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  cloudinary,
  uploadToCloudinary,
  deleteFromCloudinary,
  testCloudinaryConnection
};
