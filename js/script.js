const btnOn = document.querySelector('.on')
const btnOff = document.querySelector('.off')


// TURN ON
document.querySelectorAll('.circle').forEach(circle => {
    btnOff.addEventListener('click', () => {
        circle.style.backgroundColor = "transparent";
        console.log('switch-off');
        
    })
    
})

// TURN OFF
document.querySelectorAll('.circle').forEach(circle => {
    btnOn.addEventListener('click', () => {
        circle.removeAttribute('style');
        console.log('switch-on');
        
    })
    
})




