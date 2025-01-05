require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.send("Hi there !!");
});

app.listen(3000, () => {
  console.log("Listing on port: 3000");
});
