const path = require("path")
const express = require("express");
const jQuery = require("jquery");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))

db = {}
app.get("/", (req, res) => {
    console.log("Welcome to the home page");
    res.render("home", { title: "Home" })
})

app.get("/sandbox", (req, res) => {
    console.log("Welcome to the sandbox page");
    res.render("sandbox", { title: "Sandbox" })
})

app.get("/login", (req, res) => {
    console.log("Welcome to the login page");
    res.render("login", { title: "Login" })
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    res.send(`username ${username}`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

