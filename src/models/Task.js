import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";

export const Task = sequelize.define('tasks',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  done:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});