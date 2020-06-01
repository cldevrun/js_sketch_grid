let hslCount = 0;

//const inputSize = document.querySelector();
const container = document.querySelector('.container');
const reset  = document.querySelector('.btn_reset');
const resize = document.querySelector('.btn_resize');
const input = document.querySelector('.input');

reset.addEventListener('click', clearGrid);
resize.addEventListener('click', resetGrid);
makeGrid(3);

function makeGrid(e){
    const pixLength = (getComputedStyle(container).minWidth.replace('px','')/e)+'px'; 
    for (i = 0; i < e*e; i++){
        let content = document.createElement('div');
        content.style.width = pixLength;
        content.style.height = pixLength;
        content.classList.add('pix');
        content.addEventListener('mouseover', drawColor);
        container.appendChild(content);
    }
}

function drawColor(e) {
    let color = getColor();
    e.target.style.backgroundColor = color;
}

function getColor() {
    let color = 'hsl('+ hslCount +', 100%, 50%)';
    if (hslCount == 360) {
        hslCount = 0;
    } else {
        hslCount += 10;
    }
    return color;
}

/* Supports sizes 1-200, if none given default to 50 */
function resetGrid() {
    size = input.value;
    Array.from(document.querySelectorAll('.pix')).forEach(pixel => container.removeChild(pixel));
    makeGrid(size);
}

/* Function to clearGrid to fresh clean state */
function clearGrid() {
    Array.from(document.querySelectorAll('.pix')).forEach(pixel => pixel.style.backgroundColor='transparent');
}