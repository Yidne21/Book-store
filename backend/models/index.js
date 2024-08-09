import { Sequelize, DataTypes } from "sequelize";
import userModel from "./user.js";
import bookModel from "./book.js";
import rentalModel from "./rental.js";
import categoryModel from "./category.js";
import dotenv from "dotenv";
import * as value from "../config/enviroments.js";

dotenv.config();
console.log(value.db_name);

const sequelize = new Sequelize(
  value.db_name,
  value.db_user,
  value.db_password,
  {
    host: value.db_host,
    dialect: "postgres",
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = userModel(sequelize, DataTypes);
db.Book = bookModel(sequelize, DataTypes);
db.Rental = rentalModel(sequelize, DataTypes);
db.Category = categoryModel(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Book, { foreignKey: "ownerId" });
db.Book.belongsTo(db.User, { foreignKey: "ownerId" });

db.User.hasMany(db.Rental, { foreignKey: "borrowerId" });
db.Rental.belongsTo(db.User, { foreignKey: "borrowerId" });

db.Book.hasMany(db.Rental, { foreignKey: "bookId" });
db.Rental.belongsTo(db.Book, { foreignKey: "bookId" });

db.User.hasMany(db.Rental, { foreignKey: "ownerId" });
db.Rental.belongsTo(db.User, { foreignKey: "ownerId" });

export default db;
