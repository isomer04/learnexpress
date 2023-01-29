const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  //   res.send("Create User");
  const isValid = true; // change it to false

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    // console.log(req.body.firstName);
    console.log("error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  // res.send("Hi")
});

router.route("/:id").get((req, res) => {
  console.log(req.user);
  res
    .send(`Get User With ID ${req.params.id}`)
    .put("/:id", (req, res) => {
      res.send(`Get User With ID ${req.params.id}`);
    })
    .delete("/:id", (req, res) => {
      res.send(`Get User With ID ${req.params.id}`);
    });
});

const users = [{ name: "Jack" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
