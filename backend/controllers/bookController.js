import db from "../models";
import { uploadFile } from "../utils/cloudinary";
import { Op } from "sequelize";

export const createBook = async (req, res) => {
  const { title, author, category, quantity, rentPrice } = req.body;
  const imageFile = req.file;

  try {
    let coverPhotoUrl = "";
    if (imageFile) {
      coverPhotoUrl = await uploadFile(imageFile);
    }
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
  const {
    category,
    author,
    ownerLocation,
    ownerName,
    ownerStatus,
    bookStatus,
    ownerId,
  } = req.query;
  try {
    // Build the filter criteria for the Book table
    let bookFilter = {};

    if (category) {
      bookFilter.category = {
        [Op.iLike]: `%${category}%`,
      };
    }
    if (author) {
      bookFilter.author = {
        [Op.iLike]: `%${author}%`,
      };
    }
    if (bookStatus) {
      bookFilter.status = bookStatus;
    }
    if (ownerId) {
      bookFilter.ownerId = ownerId;
    }

    // Build the filter criteria for the Owner table
    let ownerFilter = {};
    if (ownerLocation) {
      ownerFilter.location = {
        [Op.iLike]: `%${ownerLocation}%`,
      };
    }
    if (ownerName) {
      ownerFilter.name = {
        [Op.iLike]: `%${ownerName}%`,
      };
    }
    if (ownerStatus) {
      ownerFilter.status = ownerStatus;
    }

    const options = {
      where: bookFilter,
      include: [
        {
          model: db.User,
          as: "User",
          attributes: ["location", "username", "status"],
          where: ownerFilter,
        },
      ],
    };

    const books = await db.Book.findAll(options);

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { title, author, category, quantity, rentPrice } = req.body;
  let imageFile;
  let coverPhotoUrl;
  if (req.file) {
    imageFile = req.file;
  }
  try {
    if (imageFile) {
      coverPhotoUrl = await uploadFile(imageFile);
    }
    const book = await db.Book.findByPk(req.params.bookId);
    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.category = category || book.category;
      book.quantity = parseInt(quantity) || book.quantity;
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
  const { id } = req.user;
  try {
    const books = await db.Book.findAll({
      where: {
        ownerId: id,
        status: "approved",
      },
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBookStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;

  try {
    const book = await db.Book.findByPk(bookId);
    if (book) {
      book.status = status;
      await book.save();
      res.json({ message: `Book is ${status}` });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listOfBooksGroupedByCategory = async (req, res) => {
  try {
    const books = await db.Book.findAll({
      where: {
        status: "approved",
      },
      include: [
        {
          model: db.User,
          as: "User",
          where: {
            status: "approved",
          },
          attributes: ["username"],
        },
      ],
      attributes: ["category", [db.sequelize.fn("COUNT", "category"), "count"]],
      group: ["category", "User.id"],
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBooksNamesWithIds = async (req, res) => {
  const { id } = req.user;
  try {
    const books = await db.Book.findAll({
      where: {
        ownerId: id,
      },
      attributes: ["id", "title"],
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyLiveBooksGroupedByCategory = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await db.User.findByPk(id);

    if (user.status !== "approved") {
      const dummyData = [
        {
          category: "Business",
          count: 0,
        },
        {
          category: "Fantasy",
          count: 0,
        },
        {
          category: "Fiction",
          count: 0,
        },
        {
          category: "Self-Help",
          count: 0,
        },
      ];
      return res.json(dummyData);
    }
    const books = await db.Book.findAll({
      where: {
        ownerId: id,
        status: "approved",
      },

      attributes: ["category", [db.sequelize.fn("COUNT", "category"), "count"]],
      group: ["category"],
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoriesNames = async (req, res) => {
  try {
    const categories = await db.Category.findAll(
      {
        attributes: ["name"],
      },
      { raw: true }
    );
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
