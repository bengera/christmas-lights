const btnOn = document.querySelector('.on')
const btnOff = document.querySelector('.off')

// const lights = document.getElementsByClassName('.red.yellow')
const redLight = document.querySelector('.red')

// TURN OFF
document.querySelectorAll('.circle').forEach(circle => {
    btnOff.addEventListener('click', () => {
        circle.style.backgroundColor = "transparent";


        redLight.style.animation = 'none';
        console.log('switch-off');

    })

})

// const off = function () {
//     for (var i = 0; i < length; i++) {
//         lights[i].style.animation = "none";

//       }
// }

// TURN ON
document.querySelectorAll('.circle').forEach(circle => {
    btnOn.addEventListener('click', () => {
        circle.removeAttribute('style');
        console.log('switch-on');

    })

})








//  for(var i = 0; i < circleLights.length; i++) {
//     circleLights[i].style.animation= 'none';
//   }
//   console.log(circleLights);