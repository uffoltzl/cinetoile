
/* Cards in hand */
var hand = [];
/* Cards on the board */
var board = [];
/* Counter for the number of Errors */
var nbError = 0;
/* Counter for the number of clues left */
var nbClues = 4;
/* tutorial launched */
var deb = true;
/* button clues clicked, wait for the player to click on one picture */
var clueClicked = false;
/* maximal number of points */
var maximalPoint = 0;

/* Get the difficulty chosen for the game */
function getDifficulty(){
  var i = window.location.href.length-1;
  return window.location.href[i];
}

/* Look for a film in databank (array) with the help of an url */
function findFilm(databank, url){
    var i = 0;
    while (i < databank.length) {
        if (("data/" + databank[i].url) === url) {
            return i;
        }
        else {
            i += 1;
        }
    }
    return -1;
}


/* Functions related to the position of the film on the board */

/* Calculate the distance between two points in 1d */
function distance(x1, x2){
    if (x1 >= x2){
        return -1;
    }
    else {
        return x2-x1;
    }
}

/* Find the closest film next to the mouse position */
function findNearest(x, y){
    var i = -1;
    var close = -1;
    board.forEach((film, j) => {
        // verify that there is a film which meets the condition of the position
        if (film.x < x && film.top < y && film.bot > y){
            var close_new = distance(film.x, x);
            if (close === -1 || close_new < close){
                // take the closest film which meets this condition
                i = j;
                close = close_new;
            }
        }
    });

    // Special case: beginning of a line
    if (i == -1){
        board.forEach(film => {
            if (film.bot < y){
                i++;
            }
        });
    }


    return i;
}


/* Functions related to the Drag and drop */

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    if(deb){
        deb = false;
        document.getElementById("fleche").style.animation = "";
        document.getElementById("tuto").style.animation = "";
   }
  
    var data = ev.target.src.substring(ev.target.src.lastIndexOf("/")+1)
    ev.dataTransfer.setData("image", data);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image");
    var i = findFilm(hand, "data/" + data);
    action_board(i);
}


/* Functions related to the game */

/* Initialisation of the board */
function beginBoard(){
	  maximalPoint = films.length;
    var i = Math.floor(Math.random() * films.length);
    board.push(films[i]);
    films.splice(i, 1);
    printBoard();
}

/* Print the board on the screen */
function printBoard(){
    var board_obj = document.getElementById("board");

    // Print the images on the board
    board_obj.innerHTML = "";
    board.forEach(film => {
      board_obj.innerHTML += "<div class='container_done'>" +
                "<img class='image_done' src='data/" + film.url + "'>" +
                "<div class='clue_done'>" + film.nom + "<br>" + film.date + "</div></div>";
    });

    // Update the position of the images (remembered in the array board)
    document.querySelectorAll(".image_done").forEach(image => {
        var film = board[findFilm(board, image.getAttribute("src"))];
        var el = image.getBoundingClientRect();
        film.x = (el.right + el.left)/2;
        if(board.length > 4){
            // With only up to four cards on the board (beginning), 
            // we can consider that the top/bottom of the image is
            // the top/bottom of the board
            film.top = el.top;
            film.bot = el.bottom;
        }

        // debug
        // image.addEventListener("click", function(){
        //     alert(film.top + " " + film.bot + " " + film.x);
        // });
    });

}

/* Add a card in hand */
function addHand(){
    if(hand.length > 3){
      alert("Error: too many cards in your hand");
    }
    if(films.length > 0){
        var i = Math.floor(Math.random() * films.length);
        if(getDifficulty() == 0){
          films[i].indice = true;
        }
        hand.push(films[i]);
        films.splice(i, 1);
    }
}

/* Print the hand; nbError; nbClues; the score of the player */
function printHand(){
    document.getElementById("hand").innerHTML = "";

    // Print the images
    hand.forEach(film => {
      if(film.indice){
          // the player has already unlocked the clue for this film
          document.getElementById("hand").innerHTML += "<div class='container_undone'>" +
                              "<img class='image_undone' draggable='true' ondragstart='drag(event)' src='data/" + film.url + "'>" +
                              "<div class='clue_undone'>" + film.nom + "</div></div>";
      }
      else {
          // the player has not unlocked the clue for this film yet
          document.getElementById("hand").innerHTML += "<div class='container_undone'>" +
                              "<img class='image_undone' draggable='true' ondragstart='drag(event)' src='data/" + film.url + "'></div>";
      }
    });

    // Print Errors and Score
    document.getElementById("hand").innerHTML += "<div id='error'><h1>Errors<br>" + nbError + "</h1></div>";
    document.getElementById("hand").innerHTML += "<div id='score'><h1>Score<br>" + board.length + "</h1></div>";
    if(getDifficulty() != 0){
      // if difficulty is > 0; then the clues can be unclocked
      document.getElementById("hand").innerHTML += "<div id='clues'><h1>Clues<br>" + nbClues + "</h1></div>";
      document.getElementById("hand").innerHTML += "<div id='button_clue'>" + 
                        "<button id='real_button_clue'>Use a clue</button>" +
                        "<div id='indication'>" +
                            "Please click on an image." +
                        "</div></div>";
      // Add eventListener on the button just created
      document.getElementById("real_button_clue").addEventListener("click", click_clue_button);
    }
    else {
      // if difficulty is = 0; then no clue can be unclocked
      document.getElementById("hand").innerHTML += "<div id='button_clue'>" + 
                        "<div id='indication'>" +
                            "Please click on an image." +
                        "</div></div>";
    }

    // Add eventListener on the images in hand
    document.querySelectorAll(".image_undone").forEach(image => {
        image.addEventListener("click", function(){
            // disabled the tutorial
            if(deb){
                deb = false;
                document.getElementById("fleche").style.animation = "";
                document.getElementById("tuto").style.animation = "";
            }


            var url = image.getAttribute("src");
            var i = findFilm(hand, url);
            if(i !== -1){
				if(clueClicked){
					// Clues button clicked
					clueClicked=false;
					nbClues--;
					hand[i].indice = true;
					hand[i].clicked = false;
					printHand();
				}
				else {
					hand[i].clicked = !(hand[i].clicked);
					if(hand[i].clicked){
						// only one image can be clicked
						// remove the click on the other images
						hand.forEach((film, j) => {
							if(j !== i){
								film.clicked = false;
							}
						});
						document.querySelectorAll(".image_undone").forEach(img => {
							img.style.border = "hidden";
						});

						// Add a style to notify the user that they have clicked on the image
						image.style.border = "solid";

					}
					else {
						// image unclicked
						image.style.border = "hidden";
					}
				}
            }
        });
    });
}

/* Function called every round to update all the information */
function update(){
    if(nbError >= 3 || (films.length === 0 && hand.length === 0)){
        // Gameover: you won or lost

        // Blurred board
        var board_obj = document.getElementById("board");
        board_obj.style.opacity = "0.25";
        document.getElementById("hand").style.opacity = "0.25";
        document.getElementById("button_clue").style.opacity = "0.25";
        // disable all actions
        board_obj.removeEventListener("click", click_board);
        board_obj.removeEventListener("scroll", scroll_action);
        if(getDifficulty() != 0){
          document.getElementById("real_button_clue").removeEventListener("click", click_clue_button);
        }

        // End text appears
        var middle_text = document.getElementById("middle_text");
        if(nbError >= 3){
          middle_text.innerHTML = "You lose...<br>Your score is " + board.length + "/" + maximalPoint + middle_text.innerHTML;
        }
        else if (films.length === 0){
          middle_text.innerHTML = "CONGRATULATION YOU WON<br>Your score is " + board.length + "/" + maximalPoint + middle_text.innerHTML;
        }
        middle_text.style.visibility = "visible";
        middle_text.style.animation = "launch_end 5s ease";

        // reaload the page if the user wants to replay
        document.getElementById("play").addEventListener("click", function(){
            location.reload();
        });
    }

    // Reset clues
    var ind = document.getElementById("indication");
    ind.style.opacity = 0;
    ind.style.animation = "";

    // Launch the game
    addHand();
    printHand();
    printBoard();
}

/* Action on the board */
function action_board(i){
    // Mouse's position
    var x = event.pageX;
    var y = event.pageY;

    var j = findNearest(x, y);
    // Verify all the conditions of the game
    if(j === -1){
        if(board[j+1].date >= hand[i].date){
            board.splice(j+1, 0, hand[i]);
        }
        else {
            nbError++;
        }
    }
    else if (j == (board.length-1)){
        if (board[j].date <= hand[i].date){
            board.splice(j+1, 0, hand[i]);
        }
        else {
            nbError++;
        }
    }
    else {
        if (board[j].date <= hand[i].date && board[j+1].date >= hand[i].date){
            board.splice(j+1, 0, hand[i]);
        }
        else {
            nbError++;
        }
    }

    hand.splice(i, 1);
    update();
}

/* The user clicked on the board */
function click_board(){
    // look for the clicked image in hand
    var i = 0;
    while (i < 3){
        if (hand[i].clicked){
            break;
        }
        else {
            i++;
        }
    }
    if (i < 3){
        // one element was clicked
        action_board(i);
    }
    else {
        // no card was clicked
        document.querySelectorAll(".image_undone").forEach(image => {
            image.style.animation = "vibrate 0.50s cubic-bezier(.36,.07,.19,.97) 2 both";
        });
        var ind = document.getElementById("indication");
        ind.style.opacity = 1;
        ind.style.animation = "typing 3.5s steps(40, end), cursor .75s step-end infinite";
    }
}

document.getElementById("board").addEventListener("click", click_board);

/* The user asked for a clue */
function click_clue_button(){
    if(nbClues > 0){
        // they have enough clues
        var i = 0;
        while (i < 3){
            if (hand[i].clicked){
                // print the name of the film of the clicked image
                nbClues--;
                hand[i].indice = true;
                hand[i].clicked = false;
                printHand();
                break;
            }
            else {
                i++;
            }
        }
        if(i >= 3){
            // No card was clicked
            document.querySelectorAll(".image_undone").forEach(image => {
                image.style.animation = "vibrate 0.50s cubic-bezier(.36,.07,.19,.97) 2 both";
            });
            var ind = document.getElementById("indication");
            ind.style.opacity = 1;
            ind.style.animation = "typing 3.5s steps(40, end), cursor .75s step-end infinite";
            clueClicked = true;
        }
    }
    else {
        // Tell the user to click on an image
        document.getElementById("clues").style.animation = "vibrate 0.50s cubic-bezier(.36,.07,.19,.97) 2 both";
    }
}


/* Initialisation */

beginBoard();
addHand();
addHand();
addHand();
printHand();

document.getElementById("swup").style.opacity = "1";

// tutorial
document.getElementById("fleche").style.animation = "fleche_anim 10s";
document.getElementById("tuto").style.animation = "tutorial 10s";

setTimeout(function(){
    document.getElementById("tuto").innerHTML = "";
}, 10000);

/* Update the position of the images on the board (in arry board) when the user scroll the page */
function scroll_action(){
  document.querySelectorAll(".image_done").forEach(image => {
      var film = board[findFilm(board, image.getAttribute("src"))];
      var el = image.getBoundingClientRect();
      film.top = el.top;
      film.bot = el.bottom;
      film.x = (el.right + el.left)/2;
  });
}

document.getElementById("board").addEventListener("scroll", scroll_action);



// TODO:
// redimension de l'écran
// effet sonore
// espace plus grand pour les positions dans l'espace
// remember the best player
// plus d'espace en bas du board (mettre le scroll au niveau des positions)
