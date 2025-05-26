const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O nome do produto é obrigatório'
        },
        len: {
          args: [3, 100],
          msg: 'O nome deve ter entre 3 e 100 caracteres'
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: 'O preço deve ser um número decimal'
        },
        min: {
          args: [0.01],
          msg: 'O preço deve ser maior que zero'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrlOrPath(value) {
          if (value === null || value === undefined || value === '') return;
          
          if (typeof value !== 'string') {
            throw new Error('A URL da imagem deve ser um texto');
          }
          
          // Aceita URLs válidas ou caminhos que comecem com /uploads/
          const isUrl = /^https?:\/\/.+\..+/.test(value);
          const isPath = value.startsWith('/uploads/');
          
          if (!isUrl && !isPath) {
            throw new Error('A URL da imagem deve ser válida ou começar com /uploads/');
          }
        }
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
  }, {
    tableName: 'products',
    timestamps: true,
    underscored: true
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category'
    });
  };

  return Product;
};