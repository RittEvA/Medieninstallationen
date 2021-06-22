namespace Medieninstallationen {
   
    //document.getElementById("start").addEventListener("click", start);
   // document.getElementById("stop").addEventListener("click", stop);
    navigator.geolocation.getCurrentPosition(getLocation, showError); //Für Positionsabfrage
    navigator.geolocation.watchPosition(getLocation, showError);  //Für Verfolgung
    alert("Gehe an den Startpunkt. Wenn du ihn erreicht hast, wird es eine auditive Einführung geben und danach darfst du los laufen. Viel Spaß:)");

    let x = document.getElementById("demo");
    let kontrolle:number=0;
   
    function getLocation() {//ständige Überprüfung der GPS-Koordinaten
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
        navigator.geolocation.watchPosition(forStory);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

  function showPosition(position:any) {// schreibt die Koordinaten ins HTML
      x.innerHTML = "Latitude: " + position.coords.latitude +
          "<br>Longitude: " + position.coords.longitude;
  }


function showError(error:any) {//Wenn es probleme Gibt soll er es dem Nutzer mitteilen
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Benutzer lehnte Standortabfrage ab."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Standortdaten sind nicht verfügbar."
            break;
        case error.TIMEOUT:
            x.innerHTML = "Die Standortabfrage dauerte zu lange (Time-out)."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "unbekannter Fehler."
            break;
    }
}
/*function start(){
  let audio_background = new Audio(Wanderweg.Kuenstler[0].audio);
      audio_background.play();
}*/
function forStory(position:any){
  for(let i:number = 0; i < Wanderweg.Kuenstler.length; i++){
    if (Wanderweg.Kuenstler[i].K1 > position.coords.latitude-30 && Wanderweg.Kuenstler[i].K1 < position.coords.latitude+30){//soll einen Bereich um die aktuelle Koordinate vergleichen
      //alert("die Latitude hürde genommen");
      if(Wanderweg.Kuenstler[i].K2 > position.coords.longitude-30 && Wanderweg.Kuenstler[i].K2 < position.coords.longitude+30){
        if(Wanderweg.Kuenstler[i].kontrolle==0){
          let audio_background = new Audio(Wanderweg.Kuenstler[i].audio);
          audio_background.play();
          Wanderweg.Kuenstler[i].kontrolle=1;
        }
        else{
          break;
        }
      }
      
    }
   
  }
  //Wanderweg.gram[0].text;
}
}



 /* function getLocation() {//frägt den aktuellen Standort ab
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }*/