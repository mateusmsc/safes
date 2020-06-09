'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // Fk cod_tipo_usuario
      id_tipo_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'tipo_usuario',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

  },

  down: (queryInterface) => {
    return queryInterface.dropTable('usuario');
  }
};