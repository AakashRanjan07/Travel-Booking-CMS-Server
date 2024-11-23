import mongoose from "mongoose";

const travelPackageSchema = new mongoose.Schema({
    destination: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    availableDates: { type: [String], required: true },
    maxTravelers: { type: Number, required: true },
});
export const TravelPackage = mongoose.model(
  "TravelPackage",
  travelPackageSchema
);
  