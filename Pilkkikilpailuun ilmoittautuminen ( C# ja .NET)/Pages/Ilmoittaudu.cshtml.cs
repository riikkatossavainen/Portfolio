using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Diagnostics;

namespace pilkkikilpailu.Pages {
    public class IlmoittauduModel: PageModel {

        public bool Virhe {
            get;
            set;
        } = true;
        public bool Virhe2 {
            get;
            set;
        } = true;
        public bool Virhe3 {
            get;
            set;
        } = true;
        public string VirheIlmoitus {
            get;
            set;
        }
        public string Email {
            get;
            set;
        }
        public string Puh {
            get;
            set;
        }
        public string Etunimi {
            get;
            set;
        }
        public string Sukunimi {
            get;
            set;
        }
        public string Testi {
            get;
            set;
        }

        public string PS = "";

        public List<string> Sarjat = new List<string> {
            "20 – 59 vuotiaat miehet",
            "60 – 69 vuotiaat miehet",
            "70 – 79 vuotiaat miehet",
            "yli 80 v. miehet",
            "20 – 59 vuotiaat naiset",
            "60 – 69 vuotiaat naiset",
            "70 – 79 vuotiaat naiset",
            "yli 80 v. naiset",
            "alle 19-vuotiaat pojat",
            "alle 19-vuotiaat tytöt",
            "alle 17-vuotiaat pojat",
            "alle 17-vuotiaat tytöt",
            "alle 12-vuotiaat tytöt tai pojat"
        };


        public void OnGet() {}

        public void OnPost() {


            this.Email = Request.Form["email"];
            this.Puh = Request.Form["puh"];
            this.Etunimi = Request.Form["etunimi"];
            this.Sukunimi = Request.Form["sukunimi"];
            this.Testi = Request.Form["sarja"];


            if (String.IsNullOrEmpty(this.Etunimi)) {
                this.VirheIlmoitus = "Etunimi on pakollinen!";
            } else if (String.IsNullOrEmpty(this.Sukunimi)) {
                this.VirheIlmoitus = "Sukunimi on pakollinen!";
            } else if (String.IsNullOrEmpty(this.Puh) && String.IsNullOrEmpty(this.Email)) {
                this.VirheIlmoitus = "Syötä joko puhelinumero tai sähköposti!";


            } else if (this.Testi != "20 – 59 vuotiaat miehet" && this.Testi != "60 – 69 vuotiaat miehet" && this.Testi != "70 – 79 vuotiaat miehet" && this.Testi != "yli 80 v. miehet" && this.Testi != "20 – 59 vuotiaat naiset" && this.Testi != "60 – 69 vuotiaat naiset" && this.Testi != "70 – 79 vuotiaat naiset" && this.Testi != "yli 80 v. naiset" && this.Testi != "alle 19-vuotiaat pojat" && this.Testi != "alle 19-vuotiaat tytöt" && this.Testi != "alle 17-vuotiaat pojat" && this.Testi != "alle 17-vuotiaat tytöt" && this.Testi != "alle 12-vuotiaat tytöt tai pojat") {
                this.VirheIlmoitus = "Valitse sarja!";
            } else {
                this.Virhe = false;
            }


        }
    }

}
