module.exports = (sequelize, DataTypes) => {
  const endereco = sequelize.define('endereco', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cod_usuario: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    complemento: DataTypes.STRING
  },// Remove os plurais e crido em
    { freezeTableName: true, timestamps: false });
  return endereco;
}