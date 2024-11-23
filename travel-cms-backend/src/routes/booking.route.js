import { Router } from "express";
import {
  createBooking,
  getBookings,
  updateBookingStatus,
} from "../controllers/booking.controller.js";
import { protect } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", protect, getBookings);
router.patch("/:id/status", protect, updateBookingStatus);
router.post("/", protect, createBooking);

export default router;
