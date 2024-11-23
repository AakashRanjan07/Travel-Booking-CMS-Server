import { Booking } from "../models/booking.model.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("selectedPackage");
    res.json(bookings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBookingStatus = async (req, res) => {
    try {
        console.log(req.body.status)
      const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );
      if (!updatedBooking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(updatedBooking);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

export const createBooking = async (req, res) => {
    try {
      const { customerName, contactInfo, selectedPackage, numberOfTravelers } =
        req.body;
       console.log(customerName)
      const newBooking = new Booking({
        customerName,
        contactInfo,
        selectedPackage,
        numberOfTravelers,
      });
  
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
 
 