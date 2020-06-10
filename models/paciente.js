module.exports = (sequelize, DataTypes) => {
  const paciente = sequelize.define('paciente', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cod_usuario: DataTypes.INTEGER,
    dt_nascimento: DataTypes.DATE
  }, { freezeTableName: true, timestamps: false });

  return paciente;
}