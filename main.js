const colorButton = document.getElementById('colorButton');
const colorName = document.getElementById('colorName');
const copyButton = document.getElementById('copyButton');
const hide = document.getElementsByClassName('hide')

// Function for Generate Random Color
colorButton.addEventListener('click', () => {
    // Formula: Math.floor(Math.random() * (max - min + 1) + min)
    const a = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const c = Math.floor(Math.random() * 255)
    
    const container =document.getElementById('main');
    container.style.backgroundColor = `rgb(${a},${b},${c})`
    colorName.innerHTML = `rgb(${a},${b},${c})`
    colorName.style.visibility = 'visible'
    copyButton.style.visibility = 'visible'
})

// Function for Copy Color
copyButton.addEventListener('click', () => {
    const copyColor = colorName.innerHTML
    const av = navigator.clipboard.writeText(copyColor+';')
})