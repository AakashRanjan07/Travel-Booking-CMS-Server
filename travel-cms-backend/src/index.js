import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.route.js";
import packages from "./routes/travelPackage.route.js";
import bookings from "./routes/booking.route.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed! ", err);
  });

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1/auth", auth);
app.use("/api/v1/bookings", bookings);
app.use("/api/v1/packages", packages);
