const request = require("request");

let haeSaa = (url) => {

    return new Promise((resolve, reject) => {

        request(url, (err, response) => {

            if (err) {

                reject("Palvelimeen ei saada yhteyttä");
            }else {
                

                resolve(response);
            }
        });
    });

};


module.exports = {


    "saaNyt" : (lomaketiedot, callback) => {

        var appid = "d5371cc2d5136d8700a96ee6f2fa4139";
        var city = lomaketiedot.hakusana;
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fi&APPID=${appid}`;

        haeSaa(url).then((saa) => {

            callback(null,saa);

        }).catch((virhe) => {

            callback(virhe, null);
        });
    
    },

        "oletusSaa" : (oletus, callback) => {
    
            var appid = "d5371cc2d5136d8700a96ee6f2fa4139";
            var city = oletus.kaupunki;
            var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fi&APPID=${appid}`;
    
            haeSaa(url).then((saa) => {
    
                callback(null,saa);
    
            }).catch((virhe) => {
    
                callback(virhe, null);
            });
        
        }
};

