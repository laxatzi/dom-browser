
const button = document.querySelector('button');
const list = document.querySelectorAll('list');

list.forEach((el) => el.style.color = 'blue');

//style.color = "blue";

var sandwiches = ['turkey', 'tuna', 'chicken'];
for (var i = 0; i < sandwiches.length; i++) {
    window.setTimeout(function() {
        // This will alway log '3'
        console.log(i);
    }, 1000);
}
// BUT 

const tisoras = ['soyvlakia', 'pansetes', 'soytzoykakia'];

// for (let i = 0; i < tisoras.length; i++){
//     window.setTimeout(function() {
//         console.log(i);
//     }, 2000);
// }

// NO DIFF with the above 
for (let i = 0; i < tisoras.length; i++){
    console.log(i);
}

const logEvt = (event) => console.log('The event triggered was: ' + event.type);

document.addEventListener('click', logEvt);
window.addEventListener('scroll', logEvt);