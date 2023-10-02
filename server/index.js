const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4005;
const { sequelize } = require("./util/database");
const { User } = require("./models/user");

const { login, register } = require("./controllers/auth");

app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`db sync successful & server running on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
