function chooseShip(shipImage){

    const ship = document.getElementById("chosen-ship");

    ship.src = shipImage;

    const shipScreen = document.getElementById("ship-screen");

    shipScreen.classList.add("fade-out");

    setTimeout(function(){

        shipScreen.style.display = "none";

        const mapScreen = document.getElementById("map-screen");

        mapScreen.style.display = "block";

        mapScreen.classList.add("fade-in");

    }, 1200);
}
