const express = require("express")
const bodyParser = require("body-parser")

const date = require(__dirname + "/date.js")



const app = express()





let items = ["buy food" , "cook food" , "eat food"];

let workitems = []

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))

app.get("/", function(req,res){

      
    let day = date.getDay();
    res.render("list" , {listtitle : day , newitems : items})
    
})


app.post("/" , function(req,res){

    let item =  req.body.add12;

    if(req.body.list === "work"){
        workitems.push(item)
        res.redirect("/work")
    }else{
         
        items.push(item)
        res.redirect("/")
    }
     
     
      
      
})


app.get("/work" , function(req,res){
    res.render("list" , {listtitle : "work list"   , newitems : workitems})
})

app.post("/work", function(req,res){

    let item = req.body.add12;
    workitems.push(item)
    res.redirect("/work")


})

app.get("/about" , function(req,res){
    res.render("about")
})





app.listen(3000,function(){
    console.log("server starting at port 3000")
})