const express = require("express");
const authenticateUser = require("./middleware/authenticateUser");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(authenticateUser);

app.get("/", (req, res) =>{
    if (req.authenticatedUser === true){
        
    } else if(req.authenticatedUser === "Invalid token") {
        res.send(403, "Invalid token");
    } else {
        res.send(401, "Not Authenticated");
    }
} );
app.post("/signup", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Auth Server listening on port ${port}!`));
