/*
Ohjelma tallentaa ostoslistan local storageen
*/
$(document).ready(function(){
	//alustukset
    var selected_index = -1;
    var ostosArray = [];
    if(localStorage.getItem("ostokset") != null) { //jos localstoragessa tavaraa
		tulostaOstosLista(); //tulostetaan tallennetut tiedot
	}
//tuotteen lisäys 
    $("#lisaaNappi").click(function(){
        var ostos = $("#inputti").val();
        if(ostos != ""){
            var rivi = "<li>" + ostos + "</li>"; //domiin lisättävä rivi
            $(rivi).appendTo("#ostoslista").hide().slideDown();
            $("#inputti").val("");
            $("#inputti").focus();
        };
        //tallennus localstorageen
        var ostosOlio = {  
            tavara : ostos
        }
        ostosArray.push(ostosOlio);
        localStorage.setItem("ostokset",JSON.stringify(ostosArray));
    });
    
    //haetaan localstoragesta ja tulostuetaan
    function tulostaOstosLista(){
        var ostoksetJSON = localStorage.getItem("ostokset");   
        console.log(ostoksetJSON);
		ostosArray = JSON.parse(ostoksetJSON); //ostokset kopioidaan arraylle
		if(ostosArray == null){ //jos ei ole ostoksia
			ostosArray = [];
		}	
		//lisätään kaikki listaan
       for(let i=0;i < ostosArray.length;i++) {    //katso googlesta  ero let ja var-määrittelyllä  
            $("#ostoslista").append("<li>" + ostosArray[i].tavara + "</li>");
        }
    }

    //poisto
    //li-elementti on luotu dynaamisesti, joten sille pitää luoda tapahtumankäsittelijä
    $("#ostoslista").on("click","li", function(e){
        $(this).hide(1000, function(){
			 //poisto html-listalta
            $(this).remove();
			//poisto localstoragesta
			var selected_index = parseInt($(this));
			ostosArray.splice(selected_index,1);
			localStorage.setItem("ostokset", JSON.stringify(ostosArray));
    });

    //koko listan tyhjennys tuplaklikkaaamalla
    $("#ostoslista").on("dblclick","li", function(e){
        $("li").remove();
        window.localStorage.clear(); //tyhjennetään myös local storage
    });
 
});
});