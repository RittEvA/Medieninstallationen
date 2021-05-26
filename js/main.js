var Medieninstallationen;
(function (Medieninstallationen) {
    document.getElementById("test").addEventListener("click", getLocation);
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            alert("so weit");
        }
        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
})(Medieninstallationen || (Medieninstallationen = {}));
//# sourceMappingURL=main.js.map