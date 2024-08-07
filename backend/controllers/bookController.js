import db from "../models";

export const createBook = async (req, res) => {
  const { title, author, category, quantity, rentPrice, coverPhotoUrl } =
    req.body;

  try {
    const book = await db.Book.create({
      title,
      author,
      category,
      quantity,
      ownerId: req.user.id,
      rentPrice,
      availableQuantity: quantity,
      coverPhotoUrl,
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const filterBooks = async (req, res) => {
  try {
    const books = await db.Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { title, author, category, quantity, rentPrice, coverPhotoUrl } =
    req.body;

  try {
    const book = await db.Book.findByPk(req.params.bookId);
    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.category = category || book.category;
      book.quantity = quantity || book.quantity;
      book.rentPrice = rentPrice || book.rentPrice;
      book.coverPhotoUrl = coverPhotoUrl || book.coverPhotoUrl;
      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await db.Book.findByPk(bookId);
    if (book) {
      await book.destroy();
      res.json({ message: "Book deleted" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const myBooks = async (req, res) => {
  try {
    const books = await db.Book.findAll({ where: { ownerId: req.user.id } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const approveBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const book = await db.Book.findByPk(bookId);
    if (book) {
      book.status = "approved";
      await book.save();
      res.json({ message: "Book approved" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
