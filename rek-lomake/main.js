

/* Asioita joita muokkaisin vielä mikäli tehtävänanto vaatisi ja jaksaisin:

    - Tällä hetkellä voi olla kaksi käyttäjää samalla ID:llä
    - Kaikkiin kenttiin ei tarvitse syöttää tietoa että lomake menee läpi */



const form = document.getElementById("lomake");

        let kayttajatiedot = {};
        const testiLista = ["!", "@", "£", "$", "€", "&", "%", "#"];
        const numerot = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let oikein = false;
        let postinumeroCheck = false;
        let sahkopostiCheck1 = false;
        let sahkopostiCheck2 = false;

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const kayttajaID2 = document.getElementById("kayttaja-id");    
            const postinumero2 = document.getElementById("postinumero");
            const sahkoposti2 = document.getElementById("sahkoposti");

            const kayttajaID = document.getElementById("kayttaja-id").value;
            const salasana = document.getElementById("salasana").value;
            const nimi = document.getElementById("nimi").value;
            const osoite = document.getElementById("osoite").value;
            const maa = document.getElementById("maa").value;
            const postinumero = document.getElementById("postinumero").value;
            const sahkoposti = document.getElementById("sahkoposti").value;
            const lisatietoja = document.getElementById("lisatietoja").value;

            const sukupuoli1 = document.getElementById("sukupuoli1").value;
            const sukupuoli2 = document.getElementById("sukupuoli2").value;
            const sukupuoli3 = document.getElementById("sukupuoli3").value;

            const kieli1 = document.getElementById("kieli1").value;
            const kieli2 = document.getElementById("kieli2").value;

            if (kayttajaID.length < 6){
                document.getElementById("kayttaja-id").value = "";
                document.getElementById("kayttaja-id-block").innerText = "Käyttäjänimi liian lyhyt (min. 6 merkkiä)";
                document.getElementById("kayttaja-id-block").style.display = "block";
            }

            if (kayttajaID.length >= 6){
                oikein = true;
            }
            
            let confirm = false;
            for (let i in kayttajaID){
                for (let j in testiLista){  
                    if (kayttajaID[i] === testiLista[j]){
                        confirm = true;
                    }
                }
            }

            if (confirm === false){
                document.getElementById("kayttaja-id").value = "";
                document.getElementById("kayttaja-id-block").innerText = "Käyttäjänimeen tulee sisältyä jokin näistä merkeistä: !@£$€&%#";
                document.getElementById("kayttaja-id-block").style.display = "block";
            }

            if (postinumero.length === 5){
                for(let i in postinumero){
                    if(postinumero[i] in numerot){
                        postinumeroCheck = true;
                    }
                    else if(postinumero[i] in numerot === false){
                        postinumeroCheck = false;
                    }
                }
            }

            if (postinumero.length != 5){
                document.getElementById("postinumero").value = "";
                document.getElementById("kayttaja-id-block").innerText = "Postinumeron tulee olla viisi numeroa pitkä";
                document.getElementById("kayttaja-id-block").style.display = "block";
            }

            if (postinumeroCheck === false){
                document.getElementById("postinumero").value = "";
                document.getElementById("kayttaja-id-block").innerText = "Postinumeron tulee olla viisi numeroa pitkä";
                document.getElementById("kayttaja-id-block").style.display = "block";
            }

            for (let i in sahkoposti){
                if (sahkoposti[i] === "@"){
                    sahkopostiCheck1 = true;
                if (sahkopostiCheck1){
                    for (let j in sahkoposti){
                        if (sahkoposti[j] === "."){
                            sahkopostiCheck2 = true;
                        }
                }
            }}}

            sahkopostiCheck1 = false;

            if (sahkopostiCheck2 === false){
                document.getElementById("sahkoposti").value = "";
                document.getElementById("kayttaja-id-block").innerText = "Anna sähköpostiosoite oikeassa muodossa";
                document.getElementById("kayttaja-id-block").style.display = "block";
            }

            kayttajaID2.addEventListener("click", function(event) {
                event.preventDefault();
                document.getElementById("kayttaja-id-block").style.display = "none";
            })

            postinumero2.addEventListener("click", function(event) {
                event.preventDefault();
                document.getElementById("kayttaja-id-block").style.display = "none";
            })

            sahkoposti2.addEventListener("click", function(event) {
                event.preventDefault();
                document.getElementById("kayttaja-id-block").style.display = "none";
            })

            let sukupuoli = "";
            let kieli = "";

            if(sukupuoli1){
                sukupuoli = "Mies";
            }
            else if(sukupuoli2){
                sukupuoli = "Nainen";
            }
            else if(sukupuoli3){
                sukupuoli = "Muu";
            }

            if(kieli1){
                kieli = "Suomi";
            }
            else if(kieli2){
                kieli = "Muu";
            }

            if (oikein){
                if (confirm){
                    if (postinumeroCheck){
                        if (sahkopostiCheck2){

                        /*Käyttäjätiedot joita voi käyttää johonkin myöhemmin*/
                            kayttajatiedot[kayttajaID] = `${salasana}; ${nimi}; ${osoite}; ${maa}; ${postinumero}; ${sahkoposti}; ${sukupuoli}; ${kieli}; ${lisatietoja}`;

                            console.log(kayttajatiedot);
                            document.getElementById("kayttaja-id-block").innerText = "Antamasi käyttäjätiedot on tallennettu  : )";
                            document.getElementById("kayttaja-id-block").style.display = "block";
                            oikein = false;
                            postinumeroCheck = false;
                            sahkopostiCheck2 = false;
            }}}}})