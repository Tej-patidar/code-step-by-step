const express = require("express");
const app = express();
const reqFilter = require('./middleware');
const router = express.Router();
router.use(reqFilter)
// app.use(reqFilter)
app.get("/", (req, res) => {
  res.send("hello bhaii This is the HOmepage !!!");
});
app.get("/users", (req, res) => {
  res.send("hello bhaii This is the Users Page !!!!");
});


app.get("/about", (req, res) => {
     res.send("hello bhaii This is the about Page !!!!");
   });

   app.get("/contact",reqFilter, (req, res) => {
     res.send("hello bhaii This is the contact Page !!!!");
   });
   
app.listen(4000);
