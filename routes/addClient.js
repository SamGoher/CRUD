const express = require(`express`);
const mongoose = require(`mongoose`);
const db = require(`../config/db`);
let idGenerating = require(`../idGenerating`);
const router = express.Router();
const Client = db.Client;

router.get(`/`, (req, res, next) => {
  res.render(`addClient`, {
    title: `CRUD - addClient`
  });
});

router.post(`/`, async (req, res, next) => {
  try {
    const result = await req.body;
    const client = new Client({
      id: idGenerating(),
      name: result.name,
      age: result.age,
      email: result.email
    });
    const cd = await client.save();
    console.log(`Client "${cd.name}" Added.`);
    res.redirect(`/showClients`);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;