import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";
import {Task} from "./Task.js";

export const Project = sequelize.define('projects',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  priority:{
    type: DataTypes.INTEGER
  },
  description:{
    type: DataTypes.STRING(255)
  }
});

Project.hasMany(Task, {
  foreignKey: 'projectid', 
  sourceKey: 'id'
});

Task.belongsTo(Project, {
  foreignKey: 'projectid', 
  targetId: 'id'
});