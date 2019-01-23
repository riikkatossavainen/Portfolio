const mysql = require ("mysql");

const yhteys = mysql.createConnection({
                                "host" : "localhost",
                                "user" : "root",
                                "password" : "",
                                "database" : "keskustelupalsta"

});


yhteys.connect((err) => {

if (!err) {

    console.log("Yhteys tietokantapalvelimeen avattu!");

}else {
    throw err;
}
});

module.exports = {

     "haeKaikki" : (callback) => {

        yhteys.query("SELECT keskustelut.*, viestit.aika FROM keskustelut LEFT JOIN viestit ON keskustelut.id = viestit.keskusteluID GROUP BY viestit.keskusteluID ORDER BY viestit.aika DESC ;", (err, data) => {

            callback(err, data);

});

    },

    "haePostaus" : (id, callback) => {

        yhteys.query("SELECT * FROM keskustelut WHERE id = ?", [id], (err, data) => {

            callback(err, data);

});


    },

    "haeViestit" : (id, callback) => {

        yhteys.query("SELECT * FROM viestit WHERE KeskusteluID = ? ORDER BY aika ASC", [id], (err, data) => {

            callback(err, data);

});


    },


    "haeLuku" : (callback) => {

        yhteys.query("SELECT keskusteluID, COUNT(keskusteluID) as luku FROM viestit GROUP BY keskusteluID", (err, data) => {

            console.log(data);

            callback(err, data);

});


    },


    "uusiPostaus" : (req, callback) => {

        var nimi = req.body.nimi;
        var otsikko = req.body.otsikko;
        var teksti = req.body.teksti;

        var sql = "INSERT INTO keskustelut (nimi, otsikko, teksti) VALUES ('" + nimi + "', '" + otsikko + "', '" + teksti + "')";
       
       
        yhteys.query(sql, (err, data) => {

            callback(err, data);

});


    },

  


    "uusiVastaus" : (req, callback) => {

        var nimi = req.body.nimivastaus;
        var teksti = req.body.vastaus;
        var id = req.body.keskusteluId;

        var sql = "INSERT INTO viestit (nimi, teksti, keskusteluID) VALUES ('" + nimi + "', '" + teksti + "', '" + Number(id) + "')";


        yhteys.query(sql, (err, data) => {

            callback(err, data);

});


    }
};