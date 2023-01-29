const express = require("express")
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.set('view engine', 'ejs');
app.use(logger)

app.get("/", (req, res) => {
    console.log("Here")
    res.render("index", { text23423: "World"})
    // res.json({ message: "Error"})
    // res.download("server.js")
})

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)