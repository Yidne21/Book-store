import db from "../models/index.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { username, email, password, location, phone, role } = req.body;

  try {
    const user = await db.User.create({
      username,
      email,
      password,
      role,
      location,
      phone,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user || !(await user.validPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
