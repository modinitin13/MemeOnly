const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/Schema");
const cors = require("cors");
const app = express();

// Allow cross-origin requests
app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose.connect(
  "mongodb+srv://nitin:nitinmodi@cluster0.eckac.mongodb.net/Cluster0?retryWrites=true&w=majority",
  { useFindAndModify: false }
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.listen(4000, () => {
  console.log("Now connected to port 4000");
});
