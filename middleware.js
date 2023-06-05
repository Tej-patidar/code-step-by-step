module.exports = reqFilter = (req, res, next) => {
    if(!req.query.age){
         res.send('please Provide Age !!')
    }else if(req.query.age < 18){
    res.send('You can not access these Page !!')
    }else{
    
         next()
    }
    };