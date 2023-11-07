const grid = document.querySelector('#grid');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}
    

function slideControl() {
    let slide = document.querySelector('#slide');
    let show = document.querySelector('#show');
    
    show.textContent = slide.value + " X " + slide.value
    
    slide.addEventListener('input', (event) => {
        show.textContent = event.target.value + " X " + event.target.value        
    })

}

slideControl()








