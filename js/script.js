function chooseShip(shipImage){

    const ship = document.getElementById("chosen-ship");

    ship.src = shipImage;

    document.getElementById("ship-screen").style.display = "none";

    document.getElementById("map-screen").style.display = "block";
}

function travelTo(page, x, y){

    const ship = document.getElementById("chosen-ship");

    ship.style.left = x;

    ship.style.top = y;

    setTimeout(function(){
        window.location.href = page;
    }, 2000);
}
