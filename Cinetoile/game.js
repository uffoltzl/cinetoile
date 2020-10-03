
/* Cartes dans la main */
var hand = [];
/* Cartes sur le plateau */
var board = [];
/* Compteur erreur */
var nbErreur = 0;
/* Compteur indices */
var nbIndice = 4;
/* tutoriel lancé */
var deb = true;
/* bouton indice cliqué, attends click sur photo */
var clueClicked = false;
/* nombre de point maximum */
var maximalPoint = 0;

/* Récupère la difficulté du jeu */
function getDifficulty(){
  var i = window.location.href.length-1;
  return window.location.href[i];
}

/* Recherche un film dans une banque (tableau) à partir d'un url */
function findFilm(banque, url){
    var i = 0;
    while (i < banque.length) {
        if (("data/" + banque[i].url) === url) {
            return i;
        }
        else {
            i += 1;
        }
    }
    return -1;
}

/* Calcul la distance entre deux point en 1d */
function distance(x1, x2){
    if (x1 >= x2){
        return -1;
    }
    else {
        return x2-x1;
    }
}

/* Trouve le plus proche film par rapport à la position de notre souris */
function findNearest(x, y){
    var i = -1;
    var close = -1;
    board.forEach((film, j) => {
        // on vérifie que l'on a bien un film qui répond aux conditions de position
        if (film.x < x && film.top < y && film.bot > y){
            var close_new = distance(film.x, x);
            if (close === -1 || close_new < close){
                // on prend le plus proche film qui répond à ces conditions
                i = j;
                close = close_new;
            }
        }
    });

    // Cas spécial du début de ligne
    if (i == -1){
        board.forEach(film => {
            if (film.bot < y){
                i++;
            }
        });
    }


    return i;
}

/* Fonction lancée pour choisir le premier film qui apparaître sur le plateau */
function beginBoard(){
	maximalPoint = films.length;
    var i = Math.floor(Math.random() * films.length);
    board.push(films[i]);
    films.splice(i, 1);
    printBoard();
}

/* Affichage du plateau */
function printBoard(){
    var board_obj = document.getElementById("board");

    // Affichage des images sur le plateau
    board_obj.innerHTML = "";
    board.forEach(film => {
      board_obj.innerHTML += "<div class='container_done'>" +
                "<img class='image_done' src='data/" + film.url + "'>" +
                "<div class='clue_done'>" + film.nom + "<br>" + film.date + "</div></div>";
    });

    // Actualisation de la position de l'image sur le plateau
    document.querySelectorAll(".image_done").forEach(image => {
        var film = board[findFilm(board, image.getAttribute("src"))];
        var el = image.getBoundingClientRect();
        film.x = (el.right + el.left)/2;
        if(board.length > 4){
            // Erreur au début du jeu, il ne donne pas les bonnes valeurs
            // de top et bot. On a une seule carte sur le plateau, on peut
            // se permettre de les modifier
            film.top = el.top;
            film.bot = el.bottom;
        }

        // debug
        // image.addEventListener("click", function(){
        //     alert(film.top + " " + film.bot + " " + film.x);
        // });
    });

}

/* Ajoute une carte à sa main */
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

/* Affichage des cartes présente dans la main, ainsi que les nombres d'erreur et indices restants */
function printHand(){
    document.getElementById("hand").innerHTML = "";

    // Affichage des images
    hand.forEach(film => {
      if(film.indice){
          // le joueur a déboqué un indice pour ce film
          document.getElementById("hand").innerHTML += "<div class='container_undone'>" +
                              "<img class='image_undone' draggable='true' ondragstart='drag(event)' src='data/" + film.url + "'>" +
                              "<div class='clue_undone'>" + film.nom + "</div></div>";
      }
      else {
          // le joueur n'a pas déboqué d'indice pour ce film
          document.getElementById("hand").innerHTML += "<div class='container_undone'>" +
                              "<img class='image_undone' draggable='true' ondragstart='drag(event)' src='data/" + film.url + "'></div>";
      }
    });

    // Affichage des erreurs et indices restants
    document.getElementById("hand").innerHTML += "<div id='error'><h1>Errors<br>" + nbErreur + "</h1></div>";
    document.getElementById("hand").innerHTML += "<div id='score'><h1>Score<br>" + board.length + "</h1></div>";
    if(getDifficulty() != 0){
      document.getElementById("hand").innerHTML += "<div id='clues'><h1>Clues<br>" + nbIndice + "</h1></div>";
      document.getElementById("hand").innerHTML += "<div id='button_clue'>" + 
                        "<button id='real_button_clue'>Use a clue</button>" +
                        "<div id='indication'>" +
                            "Please click on an image." +
                        "</div></div>";
      // Ajout d'un eventListener pour le bouton cliqué
      document.getElementById("real_button_clue").addEventListener("click", click_clue_button);
    }
    else {
      document.getElementById("hand").innerHTML += "<div id='button_clue'>" + 
                        "<div id='indication'>" +
                            "Please click on an image." +
                        "</div></div>";
    }

    // Ajout d'un eventListener pour une image cliquée
    document.querySelectorAll(".image_undone").forEach(image => {
        image.addEventListener("click", function(){
            // désactive le tuto si lancé
            if(deb){
                deb = false;
                document.getElementById("fleche").style.animation = "";
                document.getElementById("tuto").style.animation = "";
            }


            var url = image.getAttribute("src");
            var i = findFilm(hand, url);
            if(i !== -1){
				if(clueClicked){
					// bouton d'indice cliqué
					clueClicked=false;
					nbIndice--;
					hand[i].indice = true;
					hand[i].clicked = false;
					printHand();
				}
				else {
					hand[i].clicked = !(hand[i].clicked);
					if(hand[i].clicked){
						// une seule image peut être cliquée
						// on enlève tous les clic précédents
						hand.forEach((film, j) => {
							if(j !== i){
								film.clicked = false;
							}
						});
						document.querySelectorAll(".image_undone").forEach(img => {
							img.style.border = "hidden";
						});

						// ajout du style qui notifie le joueur qu'il a bien cliqué sur l'image
						image.style.border = "solid";

					}
					else {
						// l'image est décliquée
						image.style.border = "hidden";
					}
				}
            }
        });
    });
}


/* Actualise la postion des images sur le plateau dès l'action du scroll */
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

/* Fonction appelée entre chaque tour pour actualiser les informations */
function update(){
    if(nbErreur >= 3 || (films.length === 0 && hand.length === 0)){
        // On a gagné ou perdu

        // Plateau moins clair
        var board_obj = document.getElementById("board");
        board_obj.style.opacity = "0.25";
        document.getElementById("hand").style.opacity = "0.25";
        document.getElementById("button_clue").style.opacity = "0.25";
        // disable toutes les actions
        board_obj.removeEventListener("click", click_board);
        board_obj.removeEventListener("scroll", scroll_action);
        if(getDifficulty() != 0){
          document.getElementById("real_button_clue").removeEventListener("click", click_clue_button);
        }

        // Apparition du texte de fin
        var middle_text = document.getElementById("middle_text");
        if(nbErreur >= 3){
          middle_text.innerHTML = "You lose...<br>Your score is " + board.length + "/" + maximalPoint + middle_text.innerHTML;
        }
        else if (films.length === 0){
          middle_text.innerHTML = "CONGRATULATION YOU WON<br>Your score is " + board.length + "/" + maximalPoint + middle_text.innerHTML;
        }
        middle_text.style.visibility = "visible";
        middle_text.style.animation = "launch_end 5s ease";

        // saut de page pour le bouton
        document.getElementById("play").addEventListener("click", function(){
            location.reload();
        });
    }

    // Reset des indications
    var ind = document.getElementById("indication");
    ind.style.opacity = 0;
    ind.style.animation = "";

    // Impression du jeu
    addHand();
    printHand();
    printBoard();
}


/* Initialisation */

beginBoard();
addHand();
addHand();
addHand();
printHand();

document.getElementById("swup").style.opacity = "1";

// tutoriel
document.getElementById("fleche").style.animation = "fleche_anim 10s";
document.getElementById("tuto").style.animation = "tutorial 10s";

setTimeout(function(){
    document.getElementById("tuto").innerHTML = "";
}, 10000);

/* Jeu */

/* Action sur le plateau */
function action_board(i){
    // Position de la souris
    var x = event.pageX;
    var y = event.pageY;
  
    var j = findNearest(x, y);
    // Faire les vérifications du jeu
    if(j === -1){
        if(board[j+1].date >= hand[i].date){
            board.splice(j+1, 0, hand[i]);
        }
        else {
            nbErreur++;
        }
    }
    else if (j == (board.length-1)){
        if (board[j].date <= hand[i].date){
            board.splice(j+1, 0, hand[i]);
        }
        else {
            nbErreur++;
        }
    }
    else {
        if (board[j].date <= hand[i].date && board[j+1].date >= hand[i].date){
            board.splice(j+1, 0, hand[i]);
        }
        else {
            nbErreur++;
        }
    }
  
    hand.splice(i, 1);
    update();
}

/* Function déclenchée lorsque le plateau est cliqué */
function click_board(){
    // on recherche l'image de la main cliquée
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
      // un des éléments avaient été cliqué
      action_board(i);
    }
    else {
      // aucune carte n'avait été préalablement cliquée
      document.querySelectorAll(".image_undone").forEach(image => {
              image.style.animation = "vibrate 0.50s cubic-bezier(.36,.07,.19,.97) 2 both";
      });
      var ind = document.getElementById("indication");
      ind.style.opacity = 1;
      ind.style.animation = "typing 3.5s steps(40, end), cursor .75s step-end infinite";
    }
}

document.getElementById("board").addEventListener("click", click_board);

/* Function activée lorsque l'on demande un indice */
function click_clue_button(){
    console.log("click");
    if(nbIndice > 0){
      // assez d'indices disponibles
      var i = 0;
      while (i < 3){
        if (hand[i].clicked){
          // on affiche le titre du film de l'image sélectionnée
          nbIndice--;
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
          // Aucune carte n'avait préalablement été sélectionné
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
      // Animation qui fait vibrer le nombre d'indice
      document.getElementById("clues").style.animation = "vibrate 0.50s cubic-bezier(.36,.07,.19,.97) 2 both";
    }
}

/* Fonction pour le drag and drop */
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

function test(data){
  var i = findFilm(hand, data);
  console.log(hand[i].name);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image");
  var i = findFilm(hand, "data/" + data);
  action_board(i);
}

// TODO:
// redimension de l'écran
// effet sonore
// espace plus grand pour les positions dans l'espace
// remember the best player
// plus d'espace en bas du board
