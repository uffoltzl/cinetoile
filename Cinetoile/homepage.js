
// Animation du changement de page
document.getElementById("play_easy").addEventListener("click", function(){
    document.getElementById("swup").style.opacity = "0";
    setTimeout(() => window.location.assign("game.html?difficulty=0"), 1000);
});

document.getElementById("play_hard").addEventListener("click", function(){
    document.getElementById("swup").style.opacity = "0";
    setTimeout(() => window.location.assign("game.html?difficulty=1"), 1000);
});
