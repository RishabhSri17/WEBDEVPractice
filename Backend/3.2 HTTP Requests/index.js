import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    /* console.log(req);
    console.log(req.rawHeaders); */
    res.send("<h1>Hello World</h1><p>");
    /* res.send("<p></p>Hello , World!</p>"); */
});

app.get("/about",(req,res)=>{
    res.send("<h1>Hello World</h1><p>My Name is Rishabh!</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Hello World</h1><p>My Contact is 8839030979!</p>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});