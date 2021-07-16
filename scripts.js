let topTracker = 0;
let leftTracker = 0;

window.addEventListener("load", function() {

    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function () {
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (input) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
        }
    });

    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    let missionAbortButton = document.getElementById("missionAbort");
    missionAbortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    });

    document.getElementById("up").addEventListener("click", function() {
        let myHeight = document.getElementById("spaceShuttleHeight").innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById("spaceShuttleHeight").innerText = myHeight;

        let rocket = document.getElementById("rocket");
        topTracker = topTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; position: relative;");
    });

    document.getElementById("down").addEventListener("click", function() {
        let myHeight = document.getElementById("spaceShuttleHeight").innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById("spaceShuttleHeight").innerText = myHeight;

        let rocket = document.getElementById("rocket");
        topTracker = topTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; position: relative;");
    });

    document.getElementById("left").addEventListener("click", function () {
        let rocket = document.getElementById("rocket");
        leftTracker = leftTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left:" + leftTracker + "px; position: relative;");
    });

    document.getElementById("right").addEventListener("click", function () {
        let rocket = document.getElementById("rocket");
        leftTracker = leftTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left:" + leftTracker + "px; position: relative;");
    });

});