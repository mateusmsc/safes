module.exports = (sequelize, DataTypes) => {
  const paciente = sequelize.define('paciente', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    dt_nascimento: DataTypes.DATE
  }, { freezeTableName: true });

  return paciente;
}