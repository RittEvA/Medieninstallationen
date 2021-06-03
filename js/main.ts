namespace Medieninstallationen {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("stop").addEventListener("click", stop);
    navigator.geolocation.getCurrentPosition(getLocation, zeigeFehler); //Für Positionsabfrage
    navigator.geolocation.watchPosition(getLocation, zeigeFehler);  //Für Verfolgung

    var x = document.getElementById("demo");

    function start(){//startet Intervall damit in regelmäßigen Abständen die GPS-Daten überprüft werden
        //alert("hier bin ich");
        setInterval(getLocation, 100);
    }
   /* function getLocation() {//frägt den aktuellen Standort ab
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }*/
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }

    function showPosition(position:any) {// schreibt die Koordinaten ins HTML
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    function stop(){
        clearInterval();
    }


function zeigeFehler(error:any) {
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
}