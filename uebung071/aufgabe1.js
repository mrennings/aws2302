function rndHSL() {
    return `hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 1)`;
}

function setRndBGColor() {
    //console.log(rndHSL());
    // console.log(this);
    const id = this.id.replace(/btn_(.*)$/, "$1");
    // console.log(id);
    document.getElementById(id).style.backgroundColor = rndHSL();
}

function setRndColor() {
    const id = this.id.replace(/btn_(.*)$/, "$1");
    document.getElementById(id).style.color = rndHSL();
}

function tglBorder() {
    const id = this.id.replace(/btn_(.*)$/, "$1");
    elem = document.getElementById(id);
    // console.log(window.getComputedStyle(elem).borderWidth.replace("px", ""));
    if (parseInt(window.getComputedStyle(elem).borderWidth.replace("px", "")) != 0 ) {
        elem.style.border = "None";
    } else {
        const w = Math.floor(Math.random() * 10);
        elem.style.border = `${w}px solid ${rndHSL()}`;
        
    }
}


document.getElementById("btn_body").addEventListener("click", setRndBGColor);
document.getElementById("btn_div1").addEventListener("click", setRndBGColor);
document.getElementById("btn_h1").addEventListener("click", setRndColor);
document.getElementById("btn_div1").addEventListener("click", tglBorder);