import { DataTypes } from "sequelize";
import { sequelize } from "../db/database";


export const Permissions = sequelize.define('Permissions', {
    name: {
        type: DataTypes.ENUM('article:create', 'article:edit', 'article:delete', 'article:read') ,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {tableName: 'permissions', timestamps: false})