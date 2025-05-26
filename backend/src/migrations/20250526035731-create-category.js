'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Adicionar índice único para o campo name
    await queryInterface.addIndex('categories', ['name'], {
      unique: true,
      name: 'categories_name_unique'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover índice único antes de remover a tabela
    await queryInterface.removeIndex('categories', 'categories_name_unique');
    await queryInterface.dropTable('categories');
  }
};