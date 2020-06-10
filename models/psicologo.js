module.exports = (sequelize, DataTypes) => {
  const psicologo = sequelize.define('psicologo', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    crp: DataTypes.STRING,
    cod_usuario: DataTypes.INTEGER,
    cod_telefone: DataTypes.INTEGER,
    cod_endereco: DataTypes.INTEGER,
    dt_nascimento: DataTypes.DATE,
    dt_formacao: DataTypes.DATE,
    formacao: DataTypes.STRING
  }, { freezeTableName: true, timestamps: false });

  return psicologo;
}