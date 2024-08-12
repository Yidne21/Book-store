import express from "express";
import {
  rentBook,
  returnBook,
  totalIncome,
} from "../controllers/rentalController";
import authenticateJwt from "../middlewares/authMiddleware";
import { authorize } from "../middlewares/caslMiddleware";

const router = express.Router();

router.post(
  "/rent/:bookId",
  authenticateJwt,
  authorize("rent", "Book"),
  rentBook
);

router.put(
  "/return/:rentalId",
  authenticateJwt,
  authorize("return", "Book"),
  returnBook
);

router.get("/totalRevenue", totalIncome);

export default router;
