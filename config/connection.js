// Imports
const { connect, connection } = require("mongoose");

// Creates database
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017";
// Connects Mongoose and MongoDB
connect(connectionString);

// Exports
module.exports = connection;