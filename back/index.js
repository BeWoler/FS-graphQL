const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
  }),
);

const start = () => {
  app.listen(PORT);
  console.log(`Server is started on ${PORT}`);
};

start();
