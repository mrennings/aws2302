

function moveBtn() {
    const btn = document.getElementById("btn1");
    const visWidth = Math.floor(window.visualViewport.width);
    const visHeight = Math.floor(window.visualViewport.height);
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    //console.log(visWidth, visHeight);
    btn.style.top = `${Math.floor(Math.random() * (visHeight - btnHeight))}px`;
    btn.style.left = `${Math.floor(Math.random() * (visWidth - btnWidth))}px`;
    
    
    
}

document.getElementById("btn1").addEventListener("mouseover", moveBtn);
