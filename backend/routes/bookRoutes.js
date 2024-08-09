import express from "express";
import {
  createBook,
  filterBooks,
  updateBook,
  deleteBook,
  myBooks,
  updateBookStatus,
} from "../controllers/bookController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/caslMiddleware.js";
import multerUploads from "../middlewares/multer.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  authorize("upload", "Book"),
  multerUploads.single("file"),
  createBook
);
router.get("/", authMiddleware, authorize("filter", "Book"), filterBooks);
router.put(
  "/:bookId",
  authMiddleware,
  authorize("update", "Book"),
  multerUploads.single("file"),
  updateBook
);
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
  updateBookStatus
);
router.put(
  "/reject/:bookId",
  authMiddleware,
  authorize("unapprove", "Book"),
  updateBookStatus
);

export default router;
