function toggleMode( ) {
    const html= document.documentElement
    html.classList.toggle('light')
    const imag= document.querySelector("#profile img")
    if(html.classList.contains('light')) {
    imag.setAttribute('src', './assets/avatar-logo.png')
    } else{
    imag.setAttribute('src', './assets/avatar-nolia.png')
    }
    }