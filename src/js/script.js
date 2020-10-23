window.addEventListener("load", init);

function init(){
    const footerRight = document.getElementById("footer-right");
    let date = new Date();
    footerRight.innerText = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}
