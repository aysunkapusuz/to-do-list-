let express = require("express")
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true}))
mongoose.connect("mongodb://localhost:27017/todoListDB")


const itemSchema={
    name: String,
}
const Item=mongoose.model("Item", itemSchema)
const item1=new Item({name:"Welcome to ItBuddies"});
const item2=new Item({name:"Like"});
const item3=new Item({name:"Enjoy learning"});

const d=[item1, item2, item3];
Item.insertMany(d, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Successfully saved items to database")
    }
})

app.get("/", function(req,res){
    res.render("list", {newListItem:i1});
})


app.post("/", function(req,res){
    i=req.body.n
    i1.push(i)
    res.redirect("/")
})


app.listen(8000, function(){
    console.log("listening on port 8000!")
});