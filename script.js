function makeGrid(e){
    let container = document.querySelector('.container');
    for (i = 0; i < e; i++){
        let content = document.createElement('div');
        content.classList.add('row'+i);
        content.style.display = "inline-block";
        content.style.height = (800)/e + "px";
        content.style.width = (800)/e + "px";
        for( j = 0; j < e; j++){
            let crow = document.createElement('div'+j);
            crow.style.display = "inline-block";
            crow.style.height = (800)/e + "px";
            crow.style.width = (800)/e + "px";
            crow.style.backgroundColor = "blue";
            crow.style.justifyContent = "center";
            content.appendChild(crow);
        }
        //content.style.flex = "1 0 "+100/e + "px";
        
        container.appendChild(content);
    }
}

makeGrid(5);