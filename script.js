//const inputSize = document.querySelector();
const container = document.querySelector('.container');

makeGrid(50);

function makeGrid(e){
    let pixLength = (getComputedStyle(container).minWidth.replace('px','')/e)+'px'; 
    console.log(pixLength);
    for (i = 0; i < e*e; i++){
        const content = document.createElement('div');
        content.style.width = pixLength;
        content.style.height = pixLength;
        container.appendChild(content);
    }
}

/* Supports sizes 1-200, if none given default to 50 */
function resetGrid() {
    size = inputSize.value;
    clearGrid();
    makeGrid(size);
}

/* Function to clearGrid to fresh clean state */
function clearGrid() {
    Array.from(document.querySelectorAll('.pixel')).forEach(pixel => container.removeChild(pixel));
}