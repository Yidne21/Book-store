import db from "../models/index.js";

export const getListOfOwners = async (req, res, next) => {
  try {
    const users = await db.User.findAll({
      where: { role: "owner" },
      attributes: [
        "id",
        "username",
        "email",
        "location",
        "phone",
        "role",
        "status",
        [db.sequelize.fn("COUNT", db.sequelize.col("Books.id")), "uploads"],
      ],
      include: [
        {
          model: db.Book,
          as: "Books",
          attributes: [],
        },
      ],
      group: [
        "User.id",
        "User.username",
        "User.email",
        "User.location",
        "User.phone",
        "User.role",
        "User.status",
      ],
    });

    const userList = users.map((user) => {
      const { id, username, email, location, phone, role, status, dataValues } =
        user;
      const { uploads } = dataValues;
      return { id, username, email, location, phone, role, status, uploads };
    });

    res.status(201).json(userList);
  } catch (error) {
    next(error);
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const updateOwnerStatus = async (req, res, next) => {
  const { ownerId } = req.params;
  const { status } = req.body;
  try {
    const user = await db.User.findOne({ where: { id: ownerId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.role === "owner") {
      user.status = status;
      await user.save();
      return res.status(200).json({ message: `Owner status ${status}` });
    }

    return res.status(400).json({ error: "User is not an owner" });
  } catch (error) {
    next(error);
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const myBalance = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await db.User.findOne({
      where: { id },
      attributes: ["balance"],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    next(error);
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
