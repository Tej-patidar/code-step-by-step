const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
app.set("view engine",'ejs' )
app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, res) => {
     let user = {
          Name: 'Tej Patidar',
          Fname: 's.l. patidar',
          Mnane: 'sangeeta patiar',
          email: 'tej@gmail.com',
     }
     res.render('profile',{user})
   });

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/Nopage.html`);
});

app.listen(4000);
