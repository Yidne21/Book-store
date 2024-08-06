import { Sequelize, DataTypes } from "sequelize";
import userModel from "./user.js";
import bookModel from "./book.js";
import rentalModel from "./rental.js";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = userModel(sequelize, DataTypes);
db.Book = bookModel(sequelize, DataTypes);
db.Rental = rentalModel(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Book);
db.Book.belongsTo(db.User);

db.User.hasMany(db.Rental);
db.Rental.belongsTo(db.User);

db.Book.hasMany(db.Rental);
db.Rental.belongsTo(db.Book);

export default db;
