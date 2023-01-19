var newEvent = document.getElementById('newEvent');

newEvent.addEventListener('submit', fNewEvent)

function fNewEvent(event) {
    event.preventDefault();
    console.log('oi')
}