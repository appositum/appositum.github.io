window.onload = () => {
    let div = document.getElementById('miau-div')
    let img = document.getElementById('miau-img')
    let audio = document.getElementById('miau-audio')

    img.addEventListener('click', e => {

        if (audio.paused) {
            audio.play()
        } else {
            audio.currentTime = 0
        }
    })

    img.addEventListener('click', e => {
        div.classList.add('spin')
        img.classList.add('shrink')

        div.style.animation = 'none'
        img.style.animation = 'none'

        setTimeout(() => {
            div.style.animation = ''
            img.style.animation = ''
        }, 10)
    })
}
