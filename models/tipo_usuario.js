module.exports = (sequelize, DataTypes) => {
  const tipo_usuario = sequelize.define('tipo_usuario', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nivel: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, { freezeTableName: true });

  return tipo_usuario;
}