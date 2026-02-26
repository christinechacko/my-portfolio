
/*adjusts position of confetti randomly 
window.addEventListener("load", function randomize(){
    var r;
    var list = document.getElementsByClassName("confetti")
    for(var i=0;i<36;i++){
        const rect = list[i].getBoundingClientRect();
        r = Math.floor(Math.random()*200);
        list[i].style.margin = r + "px " + rect.bottom + "px";
        this.window.alert(list[i].style.margin);
    }
});

*/

/* from claude
document.querySelectorAll('.confetti').forEach(img => {
  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 150;
  img.style.left = Math.random() * maxX + 'px';
  img.style.top  = Math.random() * maxY + 'px';
});
*/