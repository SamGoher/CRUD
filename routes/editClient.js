const express = require(`express`);
const { Client } = require("../config/db");
const router = express.Router();

router.get(`/`, (req, res, next) => {
  res.render(`editClient`, {
    title: `CRUD - etidClient`
  });
});

router.post(`/`, async (req, res, next) => {
  try {
    
    const client = await req.body;
    const cd = await Client.findByIdAndUpdate(client.id, {
      $set: {
        name: client.name,
        age: client.age,
        email: client.email
      }
    });
    console.log(`Client "${cd.name}" updated to "${client.name}".`);
    res.redirect(`/showClients`);

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;