/*
file: ot2_c.html
desc: Ohjelma heittää noppia ja tulostaa parin nimen jos molemmat nopat samoja
date: 13.1.2018
last-updated: 13.1.2018
auth: Riikka Tossavainen
*/

  var img1 = document.getElementById("kuva1");
  var img2 = document.getElementById("kuva2");
  var tulos = document.getElementById("tulos");

  // Määritelty helpompaa kirjoittamista varten

    function pelaa() {
      tulos.innerHTML = ""; // Tulostaa pelaa funktion elementtiin tulos

      var luku1 = Math.floor((Math.random()*6)+1);
      // Random heittää luvun 0-1 väliltä. Luku pyöristetään joko 1 tai 0. Sen jälkeen kerrotaan kuudella. Koska lukua tasan kuusi ei voi tulla vaan suurin luku on 5.999999, voidaan siihen lisätä yksi jonka math.floor sitten pyöristää alaspäin.


      if (luku1 == 1 ){ // Jos arvottu numero on tasan 1, tulee silloin kuva noppa1.jpg
        img1.src = "noppa1.jpg";
    }
      else if (luku1 == 2){ // jos arvottu luku on tasan 2, 3, 4, 5 tai 6 tulee arvoa vastaava noppa kuva.
        img1.src = "noppa2.jpg";
      } else if (luku1 == 3){
        img1.src = "noppa3.jpg";
      } else if (luku1 == 4){
        img1.src = "noppa4.jpg";
      } else if (luku1 == 5){
        img1.src = "noppa5.jpg";
      } else if (luku1 == 6){
        img1.src = "noppa6.jpg";
      }

      var luku2 = Math.floor((Math.random()*6)+1); // Sama toiselle nopalle.


      if (luku2 == 1 ){
        img2.src = "noppa1.jpg";
    }
      else if (luku2 == 2){
        img2.src = "noppa2.jpg";
      } else if (luku2 == 3){
        img2.src = "noppa3.jpg";
      } else if (luku2 == 4){
        img2.src = "noppa4.jpg";
      } else if (luku2 == 5){
        img2.src = "noppa5.jpg";
      } else if (luku2 == 6){
        img2.src = "noppa6.jpg";
      }

      if (luku1 == luku2){ // Jos nopalla pyöritetty luku on sama molemmissa
        if (luku1 == 1){ // Tarkastellaan lukua luku1 (koska se on sama kuin luku2 sillä ei ole väliä)
          tulos.innerHTML = "Ykkös pari"; // Jos luku1 on 1, tulostetaan "ykkös pari" jne.
        } else if (luku1 == 2){
          tulos.innerHTML = "Kakkos pari";
        } else if (luku1 == 3){
          tulos.innerHTML = "Kolmos pari";
        } else if (luku1 == 4){
          tulos.innerHTML = "Nelos pari";
        } else if (luku1 == 5){
        tulos.innerHTML = "Vitos pari";
        } else if (luku1 == 6){
          tulos.innerHTML = "Kutos pari";
        }

    }


}
