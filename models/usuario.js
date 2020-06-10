module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cod_tipo_usuario: DataTypes.INTEGER
  }, { freezeTableName: true, timestamps: false });
  return Usuario;
}