const islands = {
    about: {
        page: "aboutme.html",
        x: "68%",
        y: "70%"
    },

    hobbies: {
        page: "favorites.html",
        x: "72%",
        y: "20%"
    },

    projects: {
        page: "projects.html",
        x: "18%",
        y: "20%"
    },

    food: {
        page: "food.html",
        x: "53%",
        y: "45%"
    },

    future: {
        page: "myfuture.html",
        x: "23%",
        y: "72%"
    }
};

function chooseShip(shipImage){
    localStorage.setItem("chosenShip", shipImage);

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

function travelTo(islandName){
    const island = islands[islandName];

    const ship = document.getElementById("chosen-ship");

    ship.style.left = island.x;
    ship.style.top = island.y;

    setTimeout(function(){
        window.location.href = island.page;
    }, 2200);
}

window.onload = function(){
    const params = new URLSearchParams(window.location.search);

    const travelIsland = params.get("travel");

    if(travelIsland){
        const shipScreen = document.getElementById("ship-screen");
        const mapScreen = document.getElementById("map-screen");
        const ship = document.getElementById("chosen-ship");

        shipScreen.style.display = "none";
        mapScreen.style.display = "block";

        ship.src = localStorage.getItem("chosenShip") || "images/ship1.png";

        setTimeout(function(){
            travelTo(travelIsland);
        }, 700);
    }
};
