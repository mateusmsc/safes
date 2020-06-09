'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('paciente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // Fk cod_usuario
      id_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'usuario',
          key: 'id'
        }
      },
      diagnostico: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dt_nascimento: {
        allowNull: false,
        type: DataTypes.DATE,
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
    return queryInterface.dropTable('paciente');
  }
};