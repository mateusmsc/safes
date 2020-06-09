module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_tipo_usuario: DataTypes.INTEGER
  }, { freezeTableName: true });
  return Usuario;
}