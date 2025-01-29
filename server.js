import express from "express";
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Port
const PORT = 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
