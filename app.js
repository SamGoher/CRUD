const express = require(`express`);
const dotenv = require(`dotenv`);
const path = require(`path`);
const mongoose = require(`mongoose`);
const exphbs = require(`express-handlebars`);
const bodyParser = require(`body-parser`);
const app = express();
const home = require(`./routes/home`);
const showingClients = require(`./routes/showClients`);
const addingClient = require(`./routes/addClient`);
const editingClient = require(`./routes/editClient`);
const deletingClient = require(`./routes/deleteClient`);
const pnf = require(`./routes/404`);
const port = process.env.PORT || 3000;


// load config
dotenv.config({path: `./config/config.env`});



app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set(`views`, path.join(__dirname, `views`));
app.engine(`hbs`, exphbs());
app.set(`view engine`, `.hbs`);
app.use(`/`, home);
app.use(`/showClients`, showingClients);
app.use(`/addClient`, addingClient);
app.use(`/editClient`, editingClient);
app.use(`/deleteClient`, deletingClient);
app.use(`/404_pageNotFound`, pnf);
app.use((req, res, next) => {
  res
  .status(404)
  .redirect(`/404_pageNotFound`);
});



app.listen(
  port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}...`)
  );
