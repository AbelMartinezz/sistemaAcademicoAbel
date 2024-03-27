"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const seccion = sequelize.define(
    "seccion",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_seccion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "seccion", // Corregido el nombre de la tabla referenciada
          key: "id",
        }
      }, 
      titulo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      URL: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      
    },
    {
      timestamps: false,
      tableName: "secciones", // Cambiado el nombre de la tabla
    }
  );

  seccion.getSecciones = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  seccion.associate = function (models) {
    // seccion.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return seccion;
};
