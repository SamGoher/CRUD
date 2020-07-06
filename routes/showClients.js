const express = require(`express`);
const mongoose = require(`mongoose`);
const db = require(`../config/db`);
const router = express.Router();

db.connectDB();
const Client = db.Client;

router.get(`/`, async (req, res, next) => {
  try {
    const clientsData = await Client.find({});
    res.render(`showClients`, {
      title: `CRUD - showClients`,
      clientsData: clientsData
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;