import { DataTypes, Op } from "sequelize";

export const initArticles = (sequelize) => {
  return sequelize.define(
    "Articles",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("published", "draft"),
        allowNull: false,
      },
    },
    { tableName: "articles", timestamps: true },
  );
};
