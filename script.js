// Funtion to inscrise the slide value on the user interface (1 X 1, 5 X 5, 16 X 16)

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

    let grid = document.querySelector('#grid');
    let colorSquare = document.querySelector('#colorsquare');
    let colorBtn = document.querySelector('#color');
    let rainbowBtn = document.querySelector('#rainbow');
    let eraseBtn = document.querySelector('#erase');
    let clear = document.querySelector('#clean');


// The three addEventListener 'click' is used to change the button design when user click

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

   // randomRGB function was created to gerate three random numbers to create a RGB color
   
    function randomRGB() {
        let randomR = Math.random() * 255
        let randomG = Math.random() * 255
        let randomB = Math.random() * 255

        return `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    
    //squareBehavior control the behavior squares according to button clicked
    

    function squareBehavior() {
        if (colorBtn.style.backgroundColor == 'rgb(49, 49, 49)') {
            return colorSquare.value
        } else if (rainbowBtn.style.backgroundColor == 'rgb(49, 49, 49)') {
            return randomRGB()
        } else if (eraseBtn.style.backgroundColor == 'rgb(49, 49, 49)') {
            return ''
        }
        
    }


    function incriseSquare(size) {
    /*gridTemplateRows and gridTemplateColumns control the bahavior of squares inside
    the CSS grid, using the parametre 'size'*/
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    //This for get the incriseSquare value to gerate squares on the grid
    for (let i = 0; i < size * size; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', 'cell');
            grid.appendChild(cell);
            cell.addEventListener('click', function onClick(event) {
                event.target.style.backgroundColor = squareBehavior();

                clear.addEventListener('click', function onClick(event) {
                    event.target.style.backgroundColor = '#313131';
                    event.target.style.color = 'white';
                    event.target.style.borderColor = 'white';
                    
                     rainbowBtn.style = ""
                     eraseBtn.style = ""
                     colorBtn.style = ""
                     cell.style = ""
                     
                })
                
            })
        }
    }















