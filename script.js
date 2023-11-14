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


function incriseSquare(size) {
    let grid = document.querySelector('#grid');
    let colorSquare = document.querySelector('#colorsquare');

    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    

    for (let i = 0; i < size * size; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', 'cell');
            grid.appendChild(cell);
            console.log(cell)
            cell.addEventListener('click', function onClick(event) {
                event.target.style.backgroundColor = colorSquare.value;
            })
        }
    }

incriseSquare()


let colorBtn = document.querySelector('#color')
let rainbowBtn = document.querySelector('#rainbow')
let eraseBtn = document.querySelector('#erase')
let clear = document.querySelector('#clean')



colorBtn.addEventListener('click', function onClick(event) {
     event.target.style.backgroundColor = '#313131';
     event.target.style.color = 'white';
     event.target.style.borderColor = 'white';
     
     rainbowBtn.style = ""
     eraseBtn.style = ""
     clear.style = ""
     
})



rainbowBtn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = '#313131';
    event.target.style.color = 'white';
    event.target.style.borderColor = 'white';

     colorBtn.style = ""
     eraseBtn.style = ""
     clear.style = ""
})

eraseBtn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = '#313131';
    event.target.style.color = 'white';
    event.target.style.borderColor = 'white';

     rainbowBtn.style = ""
     colorBtn.style = ""
     clear.style = ""
})

clear.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = '#313131';
    event.target.style.color = 'white';
    event.target.style.borderColor = 'white';

     rainbowBtn.style = ""
     eraseBtn.style = ""
     colorBtn.style = ""
})









