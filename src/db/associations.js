import { Articles } from "../model/articles.model";
import { Permissions } from "../model/permissions.model";
import { Roles } from "../model/roles.model";
import { Users } from "../model/users.model";

//Roles --- Users (1:N)
Roles.hasMany(Users, { foreignKey: 'role_id' })
Users.belongsTo(Roles, { foreignKey: 'role_id' })

//Users --- Articles (1:N)
Users.hasMany(Articles, { foreignKey: 'user_id' })
Articles.belongsTo(Users, { foreignKey: 'user_id' })

//Roles --- Permissions (N:N)
Roles.belongsToMany(Permissions, {through: 'role_permission', foreignKey: 'role_id'})
Permissions.belongsToMany(Roles, {through: 'role_permission', foreignKey: 'permission_id'})