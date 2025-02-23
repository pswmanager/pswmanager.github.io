const express = require("express");
const router = express.Router();

// Simuliamo un database in memoria
let passwords = [];

// Aggiungi una nuova credenziale
router.post("/", (req, res) => {
  const { site, username, password } = req.body;
  if (!site || !username || !password) {
    return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
  }
  const newPassword = { id: passwords.length + 1, site, username, password };
  passwords.push(newPassword);
  res.status(201).json(newPassword);
});

// Recupera tutte le credenziali
router.get("/", (req, res) => {
  res.json(passwords);
});

// Recupera una credenziale specifica
router.get("/:id", (req, res) => {
  const password = passwords.find(p => p.id === parseInt(req.params.id));
  if (!password) return res.status(404).json({ message: "Credenziale non trovata" });
  res.json(password);
});

// Elimina una credenziale
router.delete("/:id", (req, res) => {
  passwords = passwords.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: "Credenziale eliminata" });
});

module.exports = router;
