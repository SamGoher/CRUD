const express = require(`express`);
const db = require(`../config/db`);
const router = express.Router();
const Client = db.Client;

router.get(`/`, (req, res, next) => {
  res.render(`deleteClient`, {
    title: `CRUD - deleteClient`
  });
});

router.post(`/`, async (req, res, next) => {
  try {

    const clientID = await req.body.id;
    const cd = await Client.findByIdAndDelete(clientID);
    console.log(`Client "${cd.name}" deleted.`);
    res.redirect(`/showClients`);

  } catch (error) {

    console.error(error);

  }
});

module.exports = router;