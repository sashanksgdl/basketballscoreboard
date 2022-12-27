let homeScreen = 0
let guestScreen = 0

let homeScore = document.getElementById("home_team_score")
let guestScore = document.getElementById("guest_team_score")


function addOneH () {
    homeScreen += 1
    homeScore.textContent = homeScreen
}

function addTwoH () {
    homeScreen += 2
    homeScore.textContent = homeScreen
}

function addThreeH () {
    homeScreen += 3
    homeScore.textContent = homeScreen
}

function addOneG () {
    guestScreen += 1
    guestScore.textContent = guestScreen
}

function addTwoG () {
    guestScreen += 2
    guestScore.textContent = guestScreen
}

function addThreeG () {
    guestScreen += 3
    guestScore.textContent = guestScreen
}