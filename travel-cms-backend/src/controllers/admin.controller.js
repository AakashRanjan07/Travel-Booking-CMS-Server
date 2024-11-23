import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Admin } from "../models/admin.model.js";

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminEmail = await Admin.findOne({ email });
    if (adminEmail){
      console.log("exists")
      return res.status(400).json({ message: "Email already exists!" });
      }
    const admin = new Admin({ email, password });

    await admin.save();
    console.log(email);
    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (err) {
    res.status(400).json({ message: "Admin registered failed!" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
