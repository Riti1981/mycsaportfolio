const islands = {
    about: {
        page: "aboutme.html",
        path: [
            ["82%", "72%"]
        ]
    },

    hobbies: {
        page: "favorites.html",
        path: [
            ["88%", "68%"],
            ["89%", "53%"],
            ["88%", "38%"],
            ["82%", "26%"],
            ["78%", "23%"]
        ]
    },

    projects: {
        page: "projects.html",
        path: [
            ["72%", "16%"],
            ["58%", "10%"],
            ["42%", "8%"],
            ["28%", "13%"],
            ["20%", "22%"]
        ]
    },

    food: {
        page: "food.html",
        path: [
            ["26%", "32%"],
            ["38%", "38%"],
            ["50%", "45%"],
            ["58%", "48%"]
        ]
    },

    future: {
        page: "myfuture.html",
        path: [
            ["52%", "58%"],
            ["45%", "75%"],
            ["34%", "82%"],
            ["26%", "78%"]
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

            setTimeout(moveNext, 950);
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

        ship.style.left = "82%";
        ship.style.top = "72%";

        setTimeout(function(){
            travelTo(travelIsland);
        }, 700);
    }
};
