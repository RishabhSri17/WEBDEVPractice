//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var AuthorisedUser = false;

app.use(bodyParser.urlencoded({ extended: true }));

function AuthorisedUserCheck(req, res, next) {
  const passw = req.body["password"];
  if(passw === "ILoveProgramming"){
    AuthorisedUser = true;
  }
  next();
}

app.use(AuthorisedUserCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(AuthorisedUser){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
        /* res.redirect("/"); */
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
