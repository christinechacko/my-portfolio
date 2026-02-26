
$(".allconfetti").html($(".allconfetti .confetti").sort(function(){
    return Math.random()-0.5;
}));

window.addEventListener("load", function randomize(){
    var r;
    var list = document.getElementsByClassName("confetti")
    for(var i=0;i<36;i++){
        r = Math.floor(Math.random()*200);
        list[i].style.margin = r + "px";
    }
});