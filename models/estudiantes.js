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
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      apellido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      CI: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carreras", // Corregido el nombre de la tabla referenciada
          key: "id",
        }
      },  
    },
    {
      timestamps: false,
      tableName: "secciones", // Nombre de la tabla corregido
    }
  );

  seccion.getSecciones = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT, // Se corrigió el nombre de la constante QueryTypes
    });
  };

  seccion.associate = function (models) {
    // Si hay asociaciones, deberían definirse aquí
  };

  return seccion;
};
