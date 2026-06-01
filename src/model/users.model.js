import { DataTypes } from "sequelize";

export const initUsers = (sequelize) => {
  return sequelize.define(
    "Users",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true },
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: "users", timestamps: true },
  );
};
