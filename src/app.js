import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import postRoute from "./postRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Connect to database
mongoose
  .set("strictQuery", true)
  .connect(
    "mongodb+srv://chiatayroiemhanhphucnhe:9fXRi93noHE4cgQU@cluster0.7vxwvfv.mongodb.net/facolospickleball-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Kết nối db thành công"))
  .catch((error) => console.log(error));

// Router
app.use("/api", postRoute);

// Connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
