const islands = {
    about: {
        page: "aboutme.html",
        path: [
            ["80%", "70%"]
        ]
    },

    hobbies: {
        page: "favorites.html",
        path: [
            ["87%", "65%"],
            ["88%", "45%"],
            ["86%", "28%"],
            ["72%", "20%"]
        ]
    },

    projects: {
        page: "projects.html",
        path: [
            ["65%", "15%"],
            ["45%", "8%"],
            ["25%", "15%"],
            ["18%", "20%"]
        ]
    },

    food: {
        page: "food.html",
        path: [
            ["28%", "35%"],
            ["42%", "40%"],
            ["53%", "45%"]
        ]
    },

    future: {
        page: "myfuture.html",
        path: [
            ["47%", "55%"],
            ["43%", "75%"],
            ["23%", "72%"]
        ]
    }
};

function chooseShip(shipImage, event){
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

    let step = 0;

    function moveNext(){
        if(step < island.path.length){
            ship.style.left = island.path[step][0];
            ship.style.top = island.path[step][1];
            step++;

            setTimeout(moveNext, 900);
        } else {
            window.location.href = island.page;
        }
    }

    moveNext();
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
