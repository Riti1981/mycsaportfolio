function chooseShip(shipImage){

    const ship = document.getElementById("chosen-ship");

    ship.src = shipImage;

    event.target.classList.add("selected-ship");

    const shipScreen = document.getElementById("ship-screen");

    shipScreen.classList.add("fade-out");

    setTimeout(function(){

        shipScreen.style.display = "none";

        const mapScreen = document.getElementById("map-screen");

        mapScreen.style.display = "block";

        mapScreen.classList.add("fade-in");

    }, 1200);
}

function travelTo(page, x, y){

    const ship = document.getElementById("chosen-ship");

    ship.style.left = x;

    ship.style.top = y;

    document.getElementById("map-screen").classList.add("fade-out");

    setTimeout(function(){

        window.location.replace(page);

    }, 1800);
}
