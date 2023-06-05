const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
if(!req.query.age){
     res.send('please Provide Age !!')
}else if(req.query.age < 18){
res.send('You can not access these Page !!')
}else{

}
  next()
};
app.use(reqFilter)
app.get("/", (req, res) => {
  res.send("hello bhaii This is the HOmepage !!!");
});
app.get("/users", (req, res) => {
  res.send("hello bhaii This is the Users Page !!!!");
});

app.listen(4000);
