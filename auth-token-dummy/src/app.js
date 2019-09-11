const express = require("express");
const authenticateUser = require("./middleware/authenticateUser");
const app = express();
const port = 8000;

app.get("/", authenticateUser, (req, res) => res.send("Hello World!"));
app.post("/signup", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Auth Server listening on port ${port}!`));
