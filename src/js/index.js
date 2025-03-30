// Loading page animation according to the difficulty chosen
document.getElementById("play_easy").addEventListener("click", function () {
  const type = document.getElementById("type").value;
  document.getElementById("swup").style.opacity = "0";
  setTimeout(
    () => window.location.assign(`pages/game.html?type=${type}&difficulty=0`),
    1000
  );
});

document.getElementById("play_hard").addEventListener("click", function () {
  const type = document.getElementById("type").value;
  document.getElementById("swup").style.opacity = "0";
  setTimeout(
    () => window.location.assign(`pages/game.html?type=${type}&difficulty=1`),
    1000
  );
});
