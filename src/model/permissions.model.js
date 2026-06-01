import { DataTypes } from "sequelize";
import { rolesPermissions } from "../rbac/roles_permissions.config.js";



export const initPermissions = (sequelize) => {
  return sequelize.define(
    "Permissions",
    {
      name: {
        type: DataTypes.ENUM(extractPermissions()),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: "permissions", timestamps: false },
  );
};

const extractPermissions = () => {
  //Só funciona se todos os Roles tiverem todos os tipos de Permissions inscritos no código
  //mesmo que algum tipo de Role não tenha nenhuma permissão dentro daquele tipo

  //Exemplo: { role: reader,  permissions: { articles: { 'permissoes...' }, users: { 'nenhuma permissao' } } }

  const permissions = [];
  const permissionsTypes = [];

  let numberOfPermissionsTypes;

  for (const role of Object.keys(rolesPermissions)) {
    if (!numberOfPermissionsTypes) {
      numberOfPermissionsTypes = Object.keys(
        rolesPermissions[role].permissions,
      ).length;
    }

    permissionsTypes.push(...Object.keys(rolesPermissions[role].permissions));
  }

  permissionsTypes.splice(
    0,
    permissionsTypes.length - numberOfPermissionsTypes,
  );

  for (const role of Object.keys(rolesPermissions)) {
    for (const permissionType of permissionsTypes) {
      const permissionsNames = Object.keys(
        rolesPermissions[role].permissions[permissionType],
      );
      for (const permissionName of permissionsNames) {
        const permission =
          rolesPermissions[role].permissions[permissionType][permissionName].name;

        if (!permissions.includes(permission)) {
          permissions.push(permission);
        }
      }
    }
  }

  return permissions
};
