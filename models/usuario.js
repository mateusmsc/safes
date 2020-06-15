module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cod_tipo_usuario: DataTypes.INTEGER
  }, { freezeTableName: true });
  return usuario;
}