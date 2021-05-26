namespace Medieninstallationen {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("stop").addEventListener("click", stop);

    var x = document.getElementById("demo");

    function start(){
        alert("hier bin ich");
        setInterval(getLocation, 100);
    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position:any) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude+ "try";
    }
    function stop(){
        clearInterval();
    }
}