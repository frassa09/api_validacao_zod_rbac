import { DataTypes } from "sequelize";
import { rolesPermissions } from "../rbac/roles_permissions.config.js";

export const initRoles = (sequelize) => {
  return sequelize.define(
    "Roles",
    {
      name: {
        type: DataTypes.ENUM(
          rolesPermissions.admin.role,
          rolesPermissions.editor.role,
          rolesPermissions.reader.role,
        ),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { tableName: "roles", timestamps: false },
  );
};
