import express from "express";
import dotenv from "dotenv";
import db from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import rentalRoutes from "./routes/rentalRoutes.js";
import cors from "cors";
import * as value from "./config/enviroments.js";
import { cloudinaryConfig } from "./config/cloudinary.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cloudinaryConfig);

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/rentals", rentalRoutes);

const PORT = value.port || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
