const path = require("path")
const express = require("express");
const exp = require("constants");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    console.log("Welcome to the home page");
    res.render("home", { title: "Home" })
})
app.get("/rand", (req, res) => {
    num = Math.floor(Math.random() * 10) + 1
    console.log("Welcome to the random number page");
    res.render("rand", { num, title: "Random" }) // {num} = {num : num}
})
app.get("/login", (req, res) => {
    console.log("Welcome to the login page");
    res.render("login", { title: "Login" }) // {num} = {num : num}
})
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    res.send(`username ${username}`)
})


app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"]
    res.render("cats", { cats }) // {num} = {num : num}
})
app.listen(3000, () => {
    console.log("Listening on port 3000");
})

