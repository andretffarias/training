var measure = parseFloat(prompt("enter a measurement in meters :"))
var converter = measure

const metric = prompt("Choose a metric :\n- Millimeter (mm)\n- Centimeter (cm)\n- Decimeter (dm)\n- Dekameter (dam)\n- Hectometer (hm)\n- Kilometer (km)")


switch (metric) {
    case "mm": converter = converter * 1000
    alert(
        "converting " + measure + 
        "m to (mm) gives :\n" + converter + "mm"
    )
    break
    case "cm": converter = converter * 100
    alert(
        "converting " + measure + 
        "m to (cm) gives :\n" + converter + "cm"
    )
    break
    case "dm": converter = converter * 10
    alert(
        "converting " + measure + 
        "m to (dm) gives :\n" + converter + "dm"
    )
    break
    case "dam": converter = converter / 10
    alert(
        "converting " + measure + 
        "m to (dam) gives :\n" + converter + "dam"
    )
    break
    case "hm": converter = converter / 100
    alert(
        "converting " + measure + 
        "m to (hm) gives :\n" + converter + "hm"
    )
    break
    case "km": converter = converter / 1000
    alert(
        "converting " + measure + 
        "m to (km) gives :\n" + converter + "km"
    )
    break
    default: alert ("Invalid value, try to enter a valid value")
}