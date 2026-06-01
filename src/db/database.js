import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
});

import { initPermissions } from "../model/permissions.model.js";
import { initUsers } from "../model/users.model.js";
import { initArticles } from "../model/articles.model.js";
import { initRoles } from "../model/roles.model.js";

export const Users = initUsers(sequelize)
export const Articles = initArticles(sequelize)
export const Roles = initRoles(sequelize)
export const Permissions = initPermissions(sequelize)

//Roles --- Users (1:N)
Roles.hasMany(Users, { foreignKey: 'role_id' })
Users.belongsTo(Roles, { foreignKey: 'role_id' })

//Users --- Articles (1:N)
Users.hasMany(Articles, { foreignKey: 'user_id' })
Articles.belongsTo(Users, { foreignKey: 'user_id' })

//Roles --- Permissions (N:N)
Roles.belongsToMany(Permissions, {through: 'role_permission', foreignKey: 'role_id', as: 'associatedPermissions'})
Permissions.belongsToMany(Roles, {through: 'role_permission', foreignKey: 'permission_id', as: 'associatedRoles'})