const mongoose = require('mongoose');

// Sous-schéma pour l'adresse
const adresseSchema = new mongoose.Schema({
  number: Number,
  street: String,
  city: String,
  zipcode: Number,
  country: String,
});

// Sous-schéma pour les services (par exemple, dans les factures et les devis)
const serviceSchema = new mongoose.Schema({
  id: Number,
  number: Number,
  name: String,
  price: Number,
});

// Sous-schéma pour les factures et les devis
const documentSchema = new mongoose.Schema({
  id: Number,
  number: Number,
  name: String,
  date: String,
  email: String,
  phone: String,
  total: Number,
  services: [serviceSchema],
  adress: adresseSchema,
});

// Schéma principal
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  siret: Number,
  tva: String,
  adress: adresseSchema,
  phone: String,
  email: String,
  password: String,
  admin: Boolean,
  logo: String, // Suppose que le chemin du logo est stocké en tant que chaîne
  profit: Number,
  expenses: Number,
  clients: [
    {
      id: Number,
      name: String,
      phone: String,
      email: String,
      adress: adresseSchema,
      factures: [documentSchema],
      devis: [documentSchema],
    },
  ],
  factures: [documentSchema],
  devis: [documentSchema],
});

// Modèle basé sur le schéma
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
