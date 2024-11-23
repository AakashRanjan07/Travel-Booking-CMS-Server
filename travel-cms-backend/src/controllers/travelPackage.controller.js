import { TravelPackage } from "../models/travelPackage.model.js";

export const createPackage = async (req, res) => {
  try {
    console.log(req.body);
    const newPackage = new TravelPackage(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPackages = async (req, res) => {
  try {
    const packages = await TravelPackage.find();
    res.json(packages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPackageById = async (req, res) => {
  try {
    const pkg = await TravelPackage.findById(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json(pkg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const updatedPackage = await TravelPackage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPackage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePackage = async (req, res) => {
  try {
    await TravelPackage.findByIdAndDelete(req.params.id);
    res.json({ message: "Package deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
