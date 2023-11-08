function slideControl() {
    let slide = document.querySelector('#slide');
    let show = document.querySelector('#show');
    
    
    show.textContent = slide.value + " X " + slide.value 
    
    slide.addEventListener('input', (event) => {
        show.textContent = event.target.value + " X " + event.target.value
        
        incriseSquare(event.target.value)
    })
    
}

slideControl()


function incriseSquare(slideValue) {
    console.log(slideValue)
    let grid = document.querySelector('#grid');

    for (let i = 0; i < slideValue; i++) {
        for (let j = 0; j < slideValue; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
        }
    }
}







