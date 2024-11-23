import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  selectedPackage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TravelPackage",
    required: true,
  },
  numberOfTravelers: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
});
export const Booking = mongoose.model("Booking", bookingSchema);
