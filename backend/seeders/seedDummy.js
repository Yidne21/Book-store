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
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: "1234",
        location: faker.helpers.arrayElement([
          "Addis Ababa",
          "Dire Dawa",
          "Mekelle",
          "Gondar",
          "Hawassa",
        ]),
        phone: faker.phone.number(),
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
        title: faker.lorem.words(3),
        author: faker.person.firstName(), // 'Antwan'
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
    const createdCategories = await db.Category.bulkCreate(
      categories.map((name) => ({ name }))
    );

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await sequelize.close();
  }
};

export default seedData;
