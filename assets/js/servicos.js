function carregar(){
 
window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("link-topo").style.display = "block";
    } else {
        document.getElementById("link-topo").style.display = "none";
    }
}
}

