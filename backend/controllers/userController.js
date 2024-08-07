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

export const approveOwner = async (req, res, next) => {
  const { ownerId } = req.params;
  try {
    const user = await db.User.findOne({ where: { id: ownerId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.role === "owner" && user.status === "disabled") {
      user.status = "active";
      await user.save();
      return res.status(200).json({ message: "Owner approved" });
    }
    return res.status(400).json({ error: "User is already approved" });
  } catch (error) {
    next(error);
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const disableOwner = async (req, res, next) => {
  const { ownerId } = req.params;
  try {
    const user = await db.User.findOne({ where: { id: ownerId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.role === "owner" && user.status === "active") {
      user.status = "disabled";
      await user.save();
      return res.status(200).json({ message: "Owner disabled" });
    }
    return res.status(400).json({ error: "User is already disabled" });
  } catch (error) {
    next(error);
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
