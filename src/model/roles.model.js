import { DataTypes } from "sequelize";
import { sequelize } from "../db/database";


export const Roles = sequelize.define('Roles', {
    name: {
        type: DataTypes.ENUM('author', 'editor', 'reader'),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {tableName: 'roles', timestamps: false})