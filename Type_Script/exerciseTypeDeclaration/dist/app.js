const shipsList = [];
function saveSpaceShip(name, pilot, crewLimit, crew) {
    const ship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: crew,
        inMission: false
    };
    shipsList.push(ship);
}
function addCrew(SpaceShip, memberName) {
    if (SpaceShip.crewLimit < SpaceShip.crew.length) {
        SpaceShip.crew.push(memberName);
    }
    else {
        alert(`${SpaceShip.name} crew limit reached.`);
    }
}
function addMission(SpaceShip) {
    const crewLimit = SpaceShip.crewLimit;
    const minCrew = Math.floor(crewLimit / 3);
    const numOfCrew = SpaceShip.crew.length;
    if (numOfCrew > minCrew) {
        SpaceShip.inMission = true;
        alert(`${SpaceShip.name} in mission.`);
    }
    else {
        alert(`minimum number of ${SpaceShip.name} crew not reached.`);
    }
}
function shipsListAlert() {
    if (shipsList.length > 0) {
        let strList = '';
        let i = 1;
        shipsList.forEach(ship => {
            strList += i + '- ' + ship.name + '\n';
            i++;
        });
        alert(strList);
    }
    else {
        alert('no registered ships.');
    }
}
shipsListAlert();
saveSpaceShip('voidG', 'dede', 2);
shipsListAlert();
