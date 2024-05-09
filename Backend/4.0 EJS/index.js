import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const d = new Date();
    var day = d.getDay();

    res.render("index.ejs",{
        dayType:`a ${day}`,
        advice:"It's time to work hard",
    });
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`);
});