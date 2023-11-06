function slideControl() {
    let slide = document.querySelector('#slide')
    let show = document.querySelector('#show')
    

    show.textContent = slide.value + " X " + slide.value
    
    slide.addEventListener('input', (event) => {
        show.textContent = event.target.value + " X " + event.target.value
    })

}

slideControl()


let squareToSquares = document.querySelector('#squaretosquares'); console.log(squareToSquares)
let square = document.createElement('div'); console.log(square)
square.innerText = 'square'

squareToSquares.appendChield(square);


