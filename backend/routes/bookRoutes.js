import express from "express";
import {
  createBook,
  filterBooks,
  updateBook,
  deleteBook,
  myBooks,
  approveBook,
  rejectBook,
} from "../controllers/bookController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/caslMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, authorize("upload", "Book"), createBook);
router.get("/", authMiddleware, authorize("filter", "Book"), filterBooks);
router.put("/:bookId", authMiddleware, authorize("update", "Book"), updateBook);
router.delete(
  "/:bookId",
  authMiddleware,
  authorize("delete", "Book"),
  deleteBook
);
router.get("/my-books", authMiddleware, authorize("read", "Book"), myBooks);
router.put(
  "/approve/:bookId",
  authMiddleware,
  authorize("approve", "Book"),
  approveBook
);
router.put(
  "/reject/:bookId",
  authMiddleware,
  authorize("unapprove", "Book"),
  rejectBook
);
export default router;
