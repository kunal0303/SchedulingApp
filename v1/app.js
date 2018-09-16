var express = require("express");
var app= express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var port = 1337;
app.listen(port);
var request= require('request');
app.set("view engine", "ejs");

console.log("Server has started!");
        
        var friends= ["Tony", "Miranda", "Justin", "Pierce", "Lily"];
        /*var food = [
            {name: "BrewHa", image: "https://s3-media3.fl.yelpcdn.com/bphoto/iueSjfB_sR9AK_2OqTn2hA/o.jpg"},
            {name: "CaffeinaCafe" , image: "https://www.uptownnormal.com/wp-content/uploads/2016/07/caffeinas-cafe-350x233.jpg"},
            {name: "CoffeeHound", image: "https://assets.rbl.ms/12187196/980x.jpg"},
            {name: "CoffeeHouse", image: "http://coffeehousenormal.com/images/outsidecoffeehouse.jpg"},
            {name: "CrepeGreeks", image: "http://www.visitbn.org/wp-content/uploads/2016/05/Screen-Shot-2016-05-27-at-11.11.30-AM.png"},
            {name: "DPDough", image: "http://www.visitbn.org/wp-content/uploads/2014/09/Uptown-9-7-12-125-675x450.jpg"},
            {name: "Emacks & Bolios", image: "http://emackandbolios.com/website/wp-content/uploads/Charlestown-large-250x200.jpg"},
            {name: "FirehousePizzaandPub", image: "http://www.visitbn.org/wp-content/uploads/2017/02/Screen-Shot-2017-02-01-at-1.00.07-PM-675x450.png"},
            {name: "JesseGrill", image: "https://media-cdn.tripadvisor.com/media/photo-s/03/3b/54/ea/jesse-s-grille.jpg"},
            {name: "JimmyJohns", image: "http://www.visitbn.org/wp-content/uploads/2017/02/Screen-Shot-2017-02-02-at-12.40.36-PM-3.png"},
            {name: "LaBamba", image: "http://www.visitbn.org/wp-content/uploads/2017/02/Screen-Shot-2017-02-02-at-10.45.06-AM-675x260.png"},
            {name: "Lunkers", image: "http://www.visitbn.org/wp-content/uploads/2017/01/Screen-Shot-2017-01-30-at-1.26.14-PM.png"},
            {name: "MaggieMileyIrishPub", image: "http://mediad.publicbroadcasting.net/p/wglt/files/styles/medium/public/201703/170315Maggies.png"},
            {name: "Medici", image: "https://www.uptownnormal.com/wp-content/uploads/2016/05/medici.png"},
            {name: "Pub2", image: "https://bloximages.newyork1.vip.townnews.com/videtteonline.com/content/tncms/assets/v3/editorial/6/5f/65f95da4-ec9c-11e6-8e30-3f1a26237227/5898c43b201c9.image.jpg"},
            {name: "Starbucks", image: "http://img.groundspeak.com/waymarking/display/8a268445-311a-4687-94aa-534b32b336be.jpg"},
            {name: "StaveWineBarandMarket", image: "http://www.visitbn.org/wp-content/uploads/2015/08/11041922_1576491452607316_5969918785557116712_o-1-675x453.jpg"},
            {name: "Subway", image: "http://www.visitbn.org/wp-content/uploads/2017/02/Screen-Shot-2017-02-02-at-1.06.16-PM-7-675x333.png"},
            {name: "SugarMama", image: "https://bloximages.chicago2.vip.townnews.com/pantagraph.com/content/tncms/assets/v3/editorial/b/c3/bc3a7b32-749d-11e3-9766-0019bb2963f4/52c6f59e9cb87.image.jpg"},
            {name: "TheRock", image: "http://therockrestaurant.net/wp-content/uploads/2015/07/log2.jpg"},
            {name: "WindyCityWieners", image: "https://www.windycitywieners.com/files/2012/02/Windy_City_W_Final-1-300x300.png"}
        ] */

// Landing Page
        app.get("/", function(req, res){
            res.render("landing");
        });
// Friends page
    app.get("/friends", function(req,res){
   
        res.render("friends", {friends:friends});
    });
    
    app.post("/addFriend", function(req,res){
        var newfriend= (req.body.newfriend);
        friends.push(newfriend);
        res.redirect("/friends");
    });
// Food Page
    app.get("/food", function(req, res){
        var query = req.query.search;
        request("https://developers.zomato.com/api/v2.1/search?entity_type=city&q="+ query +"&apikey=16963d60e351482a91e49ef2af73c395", function(error, response,body){
        if(!error && response.statusCode == 200){
            var data= JSON.parse(body);
            res.render("food", {data:data});
        } 
    });
});
    app.get("/foodlanding", function(req,res){
        res.render("search");
    });
 
//Movies Page
    app.get("/movies", function(req, res){
    res.render("movies");
});



