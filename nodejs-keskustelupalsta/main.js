const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const portti = 3007;

const postaukset = require("./models/postaukset")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true}));



app.set("views", "./views");
app.set("view engine", "ejs");


app.post("/uusiposti/", (req, res) => {


    postaukset.uusiPostaus(req, (err) => {

        if (err) throw err;

        res.redirect("/");

    });    

});


app.post("/vastaus", (req, res) => {

console.log(req.body);

    postaukset.uusiVastaus(req, (err) => {

        if (err) throw err;

        res.redirect("/");

    });    

});


app.get("/postaus/:id", (req,res) => {

    postaukset.haePostaus(req.params.id, (err, data) => {

        if (err) throw err;

        postaukset.haeViestit(req.params.id, (err, viestit) => {

            if (err) throw err;

            res.render("postaus", { "postaukset": data[0], "vastaus" : viestit })

    });


    });


});



app.get("/kirjoita", (req,res) => {

    res.render("kirjoita", { "kirjoita" : [] })


});

app.get("/", (req, res) => {

    postaukset.haeKaikki((err, data) => {

        if (err) throw err;

        postaukset.haeLuku((err, luku) => {

            if (err) throw err;
            
            res.render("index", { "postaukset" : data, "viestit" : luku })
    
        });
        

    });


});




app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);
});