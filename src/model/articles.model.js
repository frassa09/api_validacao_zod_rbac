import { DataTypes, Op } from "sequelize";
import { sequelize } from "../db/database";


export const Articles = sequelize.define('Articles', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('published', 'draft'),
        allowNull: false
    }
}, {tableName: 'articles', timestamps: true})