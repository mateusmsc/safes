module.exports = (sequelize, DataTypes) => {
  const telefone = sequelize.define('telefone', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cod_usuario: DataTypes.INTEGER,
    num: DataTypes.STRING
  },// Remove os plurais e crido em
    { freezeTableName: true, timestamps: false });
  return telefone;
}