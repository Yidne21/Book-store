import db from "../models";
import { addDays } from "../utils";

export const rentBook = async (req, res) => {
  const { bookId } = req.params;
  const { id } = req.user;
  const { quantity } = req.body;

  try {
    const book = await db.Book.findByPk(bookId);
    if (book) {
      if (book.status === "approved" && book.availableQuantity >= quantity) {
        const returnDate = addDays(new Date(), 14);
        const bookOwner = await db.User.findByPk(book.ownerId);
        if (bookOwner) {
          const rental = await db.Rental.create({
            borrowerId: id,
            ownerId: book.ownerId,
            bookId,
            rentPrice: book.rentPrice * quantity,
            returnDate,
            rentalDate: new Date(),
            quantity,
          });

          book.availableQuantity -= quantity;
          bookOwner.balance += book.rentPrice;
          await bookOwner.save();
          await book.save();
          res.json(rental);
        }
      } else {
        res.status(400).json({ error: "Book not available" });
      }
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const returnBook = async (req, res) => {
  const { rentalId } = req.params;
  const { id } = req.user;

  try {
    const rental = await db.Rental.findByPk(rentalId);
    if (rental) {
      if (rental.borrowerId === id && rental.status === "borrowed") {
        rental.status = "returned";
        await rental.save();

        const book = await db.Book.findByPk(rental.bookId);
        const bookOwner = await db.User.findByPk(rental.ownerId);
        if (book && bookOwner) {
          book.availableQuantity += rental.quantity;
          await book.save();
        }

        res.json(rental);
      } else {
        res.status(400).json({ error: "Invalid operation" });
      }
    } else {
      res.status(404).json({ error: "Rental not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
