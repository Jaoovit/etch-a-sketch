function slideControl() {
    let slide = document.querySelector('#slide')
    let show = document.querySelector('#show')

    show.textContent = slide.value

    slide.addEventListener('input', (event) => {
        show.textContent = event.target.value + " X " + event.target.value
    })
}

slideControl()