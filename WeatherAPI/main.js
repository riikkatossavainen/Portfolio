const express = require("express");
const app = express();

const portti = 3012;

const bodyParser = require("body-parser");

const weather = require("./models/weather");

const fs = require("fs");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true}));
app.use('/img', express.static(__dirname + '/img'));

app.post("/haku",(req, res) => {

    weather.saaNyt(req.body, (virhe, saa) => {

        let lomaketiedot = req.body;

        var saa_json = JSON.parse(saa.body);

        var weather = {
            "kaupunki" : saa_json.name,
            "lampo" : saa_json.main.temp,
            "desc" : saa_json.weather[0].description,
            "ikoni" :  `http://openweathermap.org/img/w/` + saa_json.weather[0].icon + `.png`

        };

     res.render("index", {"weather" : weather, "lomaketiedot" : lomaketiedot});
    });
});

app.get("/", (req, res) => {

    let oletus;

    fs.readFile("./models/oletuskaupunki.json", (err, data) => {
    oletus = JSON.parse(data);


    if (oletus.kaupunki != null || undefined) {
    weather.oletusSaa(oletus, (virhe, saa) => {

        var saa_json = JSON.parse(saa.body);

        var weather = {
            "kaupunki" : saa_json.name,
            "lampo" : saa_json.main.temp,
            "desc" : saa_json.weather[0].description,
            "ikoni" :  `http://openweathermap.org/img/w/` + saa_json.weather[0].icon + `.png`

        };

        res.render("index", {"weather" : weather, "oletus" : oletus});

        
    });

} else {

res.render("index", {"weather" : weather}); }
    });  

 


}); 

app.get("/tallenna", (req, res) => {

      fs.readFile("./models/oletuskaupunki.json", (err, data) => {
      let oletus = JSON.parse(data);


res.render("index2", {"oletus" : oletus}); 

});     

});


app.post("/tallennaoletus", (req, res) => {
    
        fs.readFile("./models/oletuskaupunki.json", (err, data) => {

            let oletus = JSON.parse(data);
            
            let uusiOletus = {
            
                "kaupunki" : req.body.oletus
               
            };
            
            fs.writeFile("./models/oletuskaupunki.json", JSON.stringify(uusiOletus) , (err, data) => {

            });

            res.redirect("/tallenna");

         });   
    
         
    });


    app.post("/poistaoletus", (req, res) => {
    
        fs.readFile("./models/oletuskaupunki.json", (err, data) => {

            let oletus = JSON.parse(data);
            
            let uusiOletus = {
            
                "kaupunki" : null
               
            };
            
            fs.writeFile("./models/oletuskaupunki.json", JSON.stringify(uusiOletus) , (err, data) => {

            });

            res.redirect("/tallenna");

         });   
    
         
    });
   



app.listen(portti, () => {

    console.log(`palvelin käynnistyi porttiin: ${portti}`);
});