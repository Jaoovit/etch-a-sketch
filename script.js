function slideControl() {
    let slide = document.querySelector('#slide')
    let show = document.querySelector('#show')
    let squareToSquares = document.querySelector('#squaretosquares');
    let square = document.createElement('div');
    
    squareToSquares.appendChild(square);
    show.textContent = slide.value + " X " + slide.value
    
    slide.addEventListener('input', (event) => {
        show.textContent = event.target.value + " X " + event.target.value
    })

}

slideControl()







