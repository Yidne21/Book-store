import { Sequelize } from "sequelize";
import db from "../models"; // Adjust the path based on your project structure
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import * as value from "../config/enviroments.js";

dotenv.config();

// Connect to the database
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

// Seed data
const seedData = async () => {
  try {
    // Sync database
    await sequelize.sync({ force: true }); // This will drop the tables and recreate them

    // Create Users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        username: faker.helpers.arrayElement([
          "Helen Kebede",
          "Mekdes Kebede",
          "Alemayehu Abebe",
          "Mulugeta Tadesse",
          "Abebech Gobena",
          "Alemtsehay Wodajo",
          "Amarech Sahle",
          "Antwan Abraha",
          "Mulugeta Kebede",
          "Abebe Kebede",
          "Lidya Kebede",
          "Mulugeta Kebede",
          "Abebe Kebede",
          "Biruk Kebede",
          "Bisrat Jenbere",
          "Yidnekachew Kebede",
        ]),
        email: faker.internet.email(),
        password: "123456",
        location: faker.helpers.arrayElement([
          "Addis Ababa",
          "Dire Dawa",
          "Mekelle",
          "Gondar",
          "Hawassa",
        ]),
        phone: faker.helpers.arrayElement([
          "0912345678",
          "0912345679",
          "0912345670",
          "0912345671",
          "0912345672",
          "0912345673",
          "0912345674",
          "0912345675",
          "0912345676",
          "0912345677",
          "0912345678",
        ]),
        status: faker.helpers.arrayElement(["approved", "unapproved"]),
        role: faker.helpers.arrayElement(["customer", "owner"]),
      });
    }
    const createdUsers = await db.User.bulkCreate(users, {
      individualHooks: true,
    });

    // Create Books
    const books = [];
    for (let i = 0; i < 20; i++) {
      const randomUser = faker.helpers.arrayElement(
        createdUsers.filter((user) => user.role === "owner")
      );
      books.push({
        ownerId: randomUser.id,
        title: faker.helpers.arrayElement([
          "The Alchemist",
          "The Da Vinci Code",
          "The Hobbit",
          "The Great Gatsby",
          "The Catcher in the Rye",
          "The Lord of the Rings",
          "The Kite Runner",
          "The Hunger Games",
          "The Book Thief",
          "Fikr Eske Mekabir",
          "Ye Sidet Menged",
          "Ye Emnet Menged",
          "Ye Bete Menged",
        ]),
        author: faker.helpers.arrayElement([
          "Abebe Kebede",
          "Mulugeta Kebede",
          "Antwan Abraha",
          "Helen Kebede",
          "Mekdes Kebede",
          "Alemayehu Abebe",
          "Mulugeta Tadesse",
          "Abebech Gobena",
          "Alemtsehay Wodajo",
          "Amarech Sahle",
        ]), // 'Antwan'
        category: faker.helpers.arrayElement([
          "Fiction",
          "Fantasy",
          "Self-Help",
          "Business",
        ]),
        availableQuantity: faker.number.int({ min: 1, max: 10 }),
        quantity: faker.number.int({ min: 10, max: 20 }),
        rentPrice: faker.number.float({ min: 10, max: 100, fractionDigits: 3 }),
        status: "approved",
        coverPhotoUrl: faker.image.url(),
      });
    }
    const createdBooks = await db.Book.bulkCreate(books);

    // Create Rentals
    const rentals = [];
    for (let i = 0; i < 15; i++) {
      const randomBook = faker.helpers.arrayElement(createdBooks);
      const randomBorrower = faker.helpers.arrayElement(
        createdUsers.filter((user) => user.role === "customer")
      );
      rentals.push({
        borrowerId: randomBorrower.id,
        bookId: randomBook.id,
        ownerId: randomBook.ownerId,
        rentPrice: randomBook.rentPrice,
        returnDate: faker.date.future(),
        quantity: faker.number.int({
          min: 1,
          max: randomBook.availableQuantity,
        }),
      });
    }
    await db.Rental.bulkCreate(rentals);

    // Add fixed categories into categories table
    const categories = ["Fiction", "Fantasy", "Self-Help", "Business"];
    await db.Category.bulkCreate(categories.map((name) => ({ name })));

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await sequelize.close();
  }
};

export default seedData;
