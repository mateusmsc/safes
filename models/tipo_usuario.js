module.exports = (sequelize, DataTypes) => {
  const tipo_usuario = sequelize.define('tipo_usuario', {
    nivel: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, { freezeTableName: true });

  return tipo_usuario;
}