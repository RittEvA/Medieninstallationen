var Medieninstallationen;
(function (Medieninstallationen) {
    document.getElementById("start").addEventListener("click", start);
    // document.getElementById("stop").addEventListener("click", stop);
    navigator.geolocation.getCurrentPosition(getLocation, showError); //Für Positionsabfrage
    navigator.geolocation.watchPosition(getLocation, showError); //Für Verfolgung
    let x = document.getElementById("demo");
    let kontrolle;
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
            // navigator.geolocation.watchPosition(forStory);
        }
        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "Benutzer lehnte Standortabfrage ab.";
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Standortdaten sind nicht verfügbar.";
                break;
            case error.TIMEOUT:
                x.innerHTML = "Die Standortabfrage dauerte zu lange (Time-out).";
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "unbekannter Fehler.";
                break;
        }
    }
    function start() {
        let audio_background = new Audio(Medieninstallationen.Wanderweg.Kuenstler[0].audio);
        audio_background.play();
    }
    /*function forStory(position:any){
      for(let i:number; i< Wanderweg.Kuenstler.length; i++){
        if (Wanderweg.Kuenstler[i].K1 == position.coords.latitude && Wanderweg.Kuenstler[i].K2 == position.coords.longitude){//soll einen Bereich um die aktuelle Koordinate vergleichen
          let audio_background = new Audio(Wanderweg.Kuenstler[i].audio);
          audio_background.play();
          kontrolle=1;
        }
       
      }
      //Wanderweg.gram[0].text;
    }*/
})(Medieninstallationen || (Medieninstallationen = {}));
/* function getLocation() {//frägt den aktuellen Standort ab
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(showPosition);
       } else {
           x.innerHTML = "Geolocation is not supported by this browser.";
       }
   }*/ 
//# sourceMappingURL=main.js.map