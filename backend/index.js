import express from "express";
import dotenv from "dotenv";
import db from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
// import rentalRoutes from "./routes/rentalRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Use routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
// app.use("/api/rentals", rentalRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
