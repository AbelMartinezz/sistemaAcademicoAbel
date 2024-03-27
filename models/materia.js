"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define(
    "materia",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      biografia: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "materias", 
    }
  );

  materia.getMaterias = async (params) => {
    // Aquí deberías construir tu consulta SQL según los parámetros proporcionados en 'params'
    // Por ejemplo:
    // const query = `SELECT * FROM profesores WHERE ...`;
    // No hay una consulta definida en tu código original, así que necesitas definirla aquí.
    const query = ``;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  materia.associate = function (models) {
    // materia.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return materia; 
};

