const mongoose = require(`mongoose`);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost/CRUD-Operations`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  email: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Client = mongoose.model(`client`, clientSchema);

module.exports = {connectDB, Client};