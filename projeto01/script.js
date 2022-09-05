
var div = document.getElementById('div')
var img = document.getElementById('img')
var now = new Date()
var hour = now.getHours()
   var min = now.getMinutes()
    
if (hour < 18) {
    div.innerHTML = `<p><strong>${hour}:${min} am<strong><p\>`
}else{
    div.innerHTML = `<p><strong>${hour}:${min} pm<strong><p\>`
}
    if (hour >= 5 && hour <= 11) {
    document.body.style.backgroundColor = '#ffc80091'
    img.innerHTML = `<img src="images/morning.jpg"alt="img"width="250px" height="250px">`
}else if (hour >= 12 && hour <= 16) {
    document.body.style.backgroundColor = '#e6b400bc'
    img.innerHTML = `<img src="images/inicio_de_tardejpg"alt="img" width="250px" height="250px">`
}else if (hour >= 17 && hour <= 18) {
    document.body.style.backgroundColor = '#e6b400bc'
    img.innerHTML = `<img src="images/sunset.jpg"alt="img"width="250px" height="250px">`
}else if (hour >= 19 && hour <= 23) {
    document.body.style.backgroundColor = '#05003ee6'
    img.innerHTML = `<img src="images/night_sky.jpg"alt="img"width="250px" height="250px">`
}else if (hour >=0 && hour <= 4) {
    document.body.style.backgroundColor = '#05003e'
    img.innerHTML = `<img src="images/night_sky.jpg"alt="img"width="250px" height="250px">`
}