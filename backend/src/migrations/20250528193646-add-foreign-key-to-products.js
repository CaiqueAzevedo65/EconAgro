'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Primeiro, verifique se a tabela categories existe
    const [results] = await queryInterface.sequelize.query(
      "SHOW TABLES LIKE 'categories'"
    );
    
    if (results.length > 0) {
      // Adicionar a chave estrangeira
      await queryInterface.addConstraint('products', {
        fields: ['category_id'],
        type: 'foreign key',
        name: 'fk_products_category_id',
        references: {
          table: 'categories',
          field: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('products', 'fk_products_category_id');
  }
};