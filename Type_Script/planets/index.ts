type PlanetCoordinates = [number, number ,number, number]
type Planet = {name:string, coordinates:PlanetCoordinates, status:string, satellites:string[]}

const planetsList: Planet[] = []

function savePlanet(name:string, coordinates:PlanetCoordinates, status:string = 'unexplored', satellites:string[] = []) {
    const planet: Planet = {
        name: name,
        status: status,
        satellites: satellites,
        coordinates: coordinates
    } 

    planetsList.push(planet)
}

function findPlanet(planetName:string):Planet | null {
    const planet = planetsList.find(planet => planet.name === planetName)
    if (planet) {
        return planet
    } else {
        alert(`Planet '${planetName}' not found.`)
        return null
    }
}

function saveStatusPlanet(planet:Planet, status:number) {
    switch(status) {
        case 1:
            planet.status = "unexplored"
            alert(`${planet.name} status changed to ${planet.status}`)
            break
        case 2:
            planet.status = "uninhabitable"
            alert(`${planet.name} status changed to ${planet.status}`)
            break
        case 3:
            planet.status = "habitable"
            alert(`${planet.name} status changed to ${planet.status}`)
            break
        case 4:
            planet.status = "inhabited"
            alert(`${planet.name} status changed to ${planet.status}`)
            break
        default:
            alert('[ERROR]: invalid input try again.')
    }
}

function addSatellite(planet: Planet, satelliteName: string) {
    planet.satellites.push(satelliteName)
    alert(`${satelliteName} satellite added to ${planet.name} planet.`)
}

function removeSatellite(planet: Planet, satelliteName: string) {
    const index = planet.satellites.indexOf(satelliteName)

    if (index !== -1) {
        planet.satellites.splice(index, 1)
        alert(`${satelliteName} satellite removed to ${planet.name} planet.`)
    } else { alert(`${satelliteName} satellite not found.`) }
}

function listPlanets() {
    let planetStr: string = ''

    planetsList.forEach(planet => {
        let satelliteList: string = planet.satellites.join(', ')

        planetStr = planetStr + 
        `Planet: ${planet.name}\n` +
        `coordinates: (x: ${planet.coordinates[0]}) (y: ${planet.coordinates[1]}) (z: ${planet.coordinates[2]})\n` +
        `status: ${planet.status}\n` +
        `satellites (${planet.satellites.length}): ${satelliteList}\n\n`
    })
    return planetStr
}
let option:number
do {
    option = Number(prompt(`
        1- Save planet.
        2- New planet status.
        3- Add satellite.
        4- Remove satellite.
        5- Planets list.
        6- [exit].
    `))

    switch(option) {
        case 1:
            const planetName:string = prompt('Planet name:')

            let gpsX:number, gpsY:number, gpsZ:number

            do{
                gpsX = Number(prompt('Coordinate (x):'))
                if (isNaN(gpsX)) { alert('[ERROR]: invalid value.') }
            }while(isNaN(gpsX))
            do{
                gpsY = Number(prompt('Coordinate (y):'))
                if (isNaN(gpsY)) { alert('[ERROR]: invalid value.') }
            }while(isNaN(gpsY))
            do{
                gpsZ = Number(prompt('Coordinate (z):'))
                if (isNaN(gpsZ)) { alert('[ERROR]: invalid value.') }
            }while(isNaN(gpsZ))

            const confirmSavePlanet = confirm(
                `Name: ${planetName}\n` + 
                `Coordinates: x: ${gpsX} y: ${gpsY} z: ${gpsZ}\n` +
                'Save planet?'
            )
            if (confirmSavePlanet) {
                savePlanet(planetName, [gpsX, gpsY, gpsZ, 0])
            }
            break
        case 2:
            const planetCase2:Planet = findPlanet(prompt('Planet name:'))

             if (planetCase2) {
                let valid:boolean = false
                while(!valid) {
                    let sttOption:number = Number(prompt(
                        `New planet status:\n\n` +
                        `1- unexplored\n` +
                        `2- uninhabitable\n` +
                        `3- habitable\n` +
                        `4- inhabited`
                    ))

                    if (sttOption >= 1 && sttOption <= 4) {
                        saveStatusPlanet(planetCase2, sttOption)
                        valid = true
                    }else {
                        alert('[ERROR]: Invalid planet status.')
                    }
                }
            }
            break
        case 3:
            const planetCase3:Planet = findPlanet(prompt('Planet name:'))
            if (planetCase3) {
                const stllName:string = prompt('Satellite name:')

                const confirmSaveStll = confirm(`Add satellite ${stllName} to ${planetCase3.name}?`)

                if (confirmSaveStll) {
                    planetCase3.satellites.push(stllName)
                    alert(`${stllName} add to ${planetCase3.name}`)
                }
            }
            break
        case 4:
            const planetCase4:Planet = findPlanet(prompt('Planet name:'))
            if (planetCase4) {
                const stllName:string = prompt('Satellite name:')

                const indexStll = planetCase4.satellites.findIndex(stll => stll === stllName)

                if (indexStll !== -1) {
                    const confirmRemoveStll = confirm(`remove satellite ${stllName} to ${planetCase4.name}?`)
                    if (confirmRemoveStll) {
                         planetCase4.satellites.splice(indexStll, 1)
                         alert(`${stllName} removed to ${planetCase4.name}`)
                    }
                }else { alert(`Satellite ${stllName} not found.`) }   
            }
            break
        case 5:
            alert(listPlanets())
            break
        case 6:
            break
        default:
            alert('[ERROR]: Invalid option.')
    }
} while(option !== 6)