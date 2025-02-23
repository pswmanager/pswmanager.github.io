require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middleware
app.use(express.json()); // Abilita JSON nel body delle richieste
app.use(cors()); // Abilita CORS
app.use(helmet()); // Aggiunge protezione HTTP

// Rotta base
app.get("/", (req, res) => {
  res.json({ message: "Password Manager API is running!" });
});

const passwordRoutes = require("./routes/passwords");
app.use("/api/passwords", passwordRoutes);

// Avvio del server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
