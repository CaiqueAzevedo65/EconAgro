'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Definir as categorias padrão
    const defaultCategories = [
      { name: 'Grãos' },
      { name: 'Frutas' },
      { name: 'Legumes' },
      { name: 'Verduras' },
      { name: 'Outros' }
    ];

    // Inserir categorias que ainda não existem
    for (const category of defaultCategories) {
      // Verificar se a categoria já existe
      const [existingCategory] = await queryInterface.sequelize.query(
        `SELECT id FROM categories WHERE name = '${category.name}' LIMIT 1`,
        { type: Sequelize.QueryTypes.SELECT }
      );

      if (!existingCategory) {
        await queryInterface.bulkInsert('categories', [{
          name: category.name,
          created_at: new Date(),
          updated_at: new Date()
        }]);
      }
    }

    // Buscar todas as categorias para mapeamento
    const categories = await queryInterface.sequelize.query(
      'SELECT id, LOWER(name) as name FROM categories',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Mapear nomes de categorias para IDs
    const categoryMap = {};
    if (Array.isArray(categories)) {
      categories.forEach(category => {
        categoryMap[category.name] = category.id;
      });
    }

    // Limpar produtos existentes para evitar duplicatas
    await queryInterface.bulkDelete('products', null, {});

    // Inserir produtos
    await queryInterface.bulkInsert('products', [
      // Grãos
      {
        name: 'Arroz Integral 5kg',
        price: 25.90,
        description: 'Arroz integral de alta qualidade',
        image_url: 'https://example.com/arroz-integral.jpg',
        category_id: categoryMap['grãos'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Feijão Carioca 1kg',
        price: 8.50,
        description: 'Feijão carioca tipo 1',
        image_url: 'https://example.com/feijao-carioca.jpg',
        category_id: categoryMap['grãos'],
        created_at: new Date(),
        updated_at: new Date()
      },
      
      // Frutas
      {
        name: 'Maçã Gala',
        price: 5.90,
        description: 'Maçãs vermelhas frescas',
        image_url: 'https://example.com/maca.jpg',
        category_id: categoryMap['frutas'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Banana Prata',
        price: 3.99,
        description: 'Banana prata madura',
        image_url: 'https://example.com/banana.jpg',
        category_id: categoryMap['frutas'],
        created_at: new Date(),
        updated_at: new Date()
      },
      
      // Legumes
      {
        name: 'Cenoura',
        price: 3.50,
        description: 'Cenouras orgânicas',
        image_url: 'https://example.com/cenoura.jpg',
        category_id: categoryMap['legumes'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Batata Inglesa',
        price: 4.20,
        description: 'Batata inglesa especial',
        image_url: 'https://example.com/batata.jpg',
        category_id: categoryMap['legumes'],
        created_at: new Date(),
        updated_at: new Date()
      },
      
      // Verduras
      {
        name: 'Alface Crespa',
        price: 2.90,
        description: 'Alface crespa fresca',
        image_url: 'https://example.com/alface.jpg',
        category_id: categoryMap['verduras'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Rúcula',
        price: 2.50,
        description: 'Rúcula fresca orgânica',
        image_url: 'https://example.com/rucula.jpg',
        category_id: categoryMap['verduras'],
        created_at: new Date(),
        updated_at: new Date()
      },
      
      // Outros
      {
        name: 'Mel Orgânico 500g',
        price: 28.90,
        description: 'Mel puro de abelhas sem adição de açúcar',
        image_url: 'https://example.com/mel.jpg',
        category_id: categoryMap['outros'],
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remover produtos primeiro (devido à restrição de chave estrangeira)
    await queryInterface.bulkDelete('products', null, {});
    // Em seguida, remover categorias
    await queryInterface.bulkDelete('categories', null, {});
  }
};
