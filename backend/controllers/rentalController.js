import db from "../models";
import { addDays } from "../utils";

export const rentBook = async (req, res) => {
  const { bookId } = req.params;
  const { id: borrowerId } = req.user;
  const { quantity } = req.body;

  try {
    const book = await db.Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    if (book.availableQuantity < quantity) {
      return res.status(400).json({
        error: `Not enough books available. Only ${book.availableQuantity} book(s) available.`,
      });
    }

    const owner = await db.User.findByPk(book.ownerId);
    if (book.status !== "approved" || owner.status !== "approved") {
      return res.status(400).json({ error: "Book not available" });
    }

    const returnDate = addDays(new Date(), 14);

    const rental = await db.Rental.create({
      borrowerId,
      ownerId: book.ownerId,
      bookId,
      rentPrice: book.rentPrice * quantity,
      returnDate,
      rentalDate: new Date(),
      quantity,
    });

    book.availableQuantity -= quantity;
    owner.balance += book.rentPrice * quantity;

    await Promise.all([book.save(), owner.save()]);

    res.json(rental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const returnBook = async (req, res) => {
  const { rentalId } = req.params;
  const { id: borrowerId } = req.user;

  try {
    const rental = await db.Rental.findByPk(rentalId);
    if (!rental) {
      return res.status(404).json({ error: "Rental not found" });
    }

    if (rental.borrowerId !== borrowerId || rental.status !== "borrowed") {
      return res.status(400).json({ error: "Invalid operation" });
    }

    rental.status = "returned";
    await rental.save();

    const book = await db.Book.findByPk(rental.bookId);
    if (book) {
      book.availableQuantity += rental.quantity;
      await book.save();
    }

    res.json(rental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const totalIncome = async (req, res) => {
  try {
    const rentals = await db.Rental.findAll({});

    const totalIncome = rentals.reduce(
      (acc, rental) => acc + rental.rentPrice,
      0
    );

    res.json({ totalIncome });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
