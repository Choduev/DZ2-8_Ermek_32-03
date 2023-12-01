function changeColor() {
    const randomColor = getRandomColor()
    const square = document.getElementById('square')
    const colorName = document.getElementById('colorName')

    square.style.backgroundColor = randomColor
    square.innerText = randomColor
    colorName.innerText = randomColor
}
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    return hexColor;
}