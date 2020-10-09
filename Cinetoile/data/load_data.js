/* Class with all the information necessary to describe a movie */
class Carte {
  constructor(url, nom, date) {
    // image
    this.url = url;
    this.nom = nom;
    this.date = date;

    // is the image clicked
    this.clicked = false;
    // postition of the image on the board
    this.top = 0;
    this.bot = 3000;
    this.x = 0;
    // is the clue selected for this image
    this.indice = false;
  }
}

/* Load all the data in a array of cards */

var films = [];

function addFilm(url, nom, date){
    films.push(new Carte(url, nom, date));
}

addFilm("2001_lodyssee_de_lespace_1968.jpg", "2001: A Space Odyssey", 1968);
addFilm("alien_1979.jpg", "Alien", 1979);
addFilm("apocalypse_now_1979.jpg", "Apocalypse now", 1979);
addFilm("avatar_2009.jpg", "Avatar", 2009);
addFilm("bienvenu_a_gattaca_1997.jpg", "Gattaca", 1997);
addFilm("big_fish_2003.jpg", "Big Fish", 2003);
addFilm("bonnie_and_clyde_1967.jpg", "Bonnie & Clyde", 1967);
addFilm("captain_fantastic_2016.jpg", "Captain Fantastic", 2016);
addFilm("casablanca_1942.jpg", "Casablanca", 1942);
addFilm("casino_1995.jpg", "Casino", 1995);
addFilm("douze_hommes_en_colere_1957.jpg", "12 Angry Men", 1957);
addFilm("elephant_man_1980.jpg", "The Elephant Man", 1980);
addFilm("fantasia_1940.jpg", "Fantasia", 1940);
addFilm("fight_club_1999.jpg", "Fight Club", 1999);
addFilm("good_will_hunting_1997.jpg", "Good Will Hunting", 1997);
addFilm("harry_potter_a_lecole_des_sorciers_2001.jpg", "Harry Potter 1", 2001);
addFilm("her_2013.jpg", "Her", 2013);
addFilm("inception_2010.jpg", "Inception", 2010);
addFilm("intouchables_2011.jpg", "Intouchables", 2011);
addFilm("kill_bill_2003.jpg", "Kill Bill", 2003);
addFilm("king_kong_2005.jpg", "King Kong", 2005);
addFilm("la_guerre_des_mondes_1953.jpg", "War of the Worlds", 1953);
addFilm("la_guerre_des_mondes_2005.jpg", "War of the Worlds", 2005);
addFilm("la_la_land_2016.png", "La la land", 2016);
addFilm("la_planete_des_singes_1968.jpg", "Planet of the Apes", 1968);
addFilm("Larrivee_dun_train_en_gare_de_la_ciotat_1896.jpg", "L'arrivée d'un train en gare de la Ciotat", 1896);
addFilm("le_bon_la_brute_et_le_truand_1966.jpg", "The Good, the Bad and the Ugly", 1966);
addFilm("le_bouton_de_nacre_2015.jpg", "The Pearl Button", 2015);
addFilm("le_loup_de_wall_street_2013.jpg", "The Wolf of Wall Street", 2013);
addFilm("le_silence_des_agneaux_1991.jpg", "The Silence of the Lambs", 1991);
addFilm("Le_voyage_dans_la_lune_1902.jpg", "A Trip to the Moon", 1902);
addFilm("le_voyage_de_chihiro_2001.jpg", "Spirited Away", 2001)
addFilm("les_demoiselles_de_rochefort_1967.jpg", "The Young Girls of Rochefort", 1967);
addFilm("les_dents_de_la_mer_1975.jpg", "Jaws", 1975);
addFilm("Letrange_noel_de_monsieur_jack_1993.jpg", "The Nightmare Before Christmas", 1993);
addFilm("lexorcist_1973.jpg", "The Exorcist", 1973);
addFilm("mars_attack_1996.png", "Mars Attacks!", 1996);
addFilm("memento_2000.jpg", "Memento", 2000);
addFilm("monty_python_sacre_graal_1975.jpg", "Monty Python and the Holy Grail", 1975);
addFilm("ne_un_4_juillet_1989.jpg", "Born on the Fourth of July", 1989);
addFilm("oceans_2009.jpg", "Oceans", 2009);
addFilm("orange_mecanique_1971.jpg", "A Clockwork Orange", 1971);
addFilm("out_of_africa_1985.jpg", "Out of Africa", 1985);
addFilm("persepolis_2007.jpg", "Persepolis", 2007);
addFilm("pirates_des_caraibes_1_2003.jpg", "Pirates of the Caribbean 1", 2003);
addFilm("psychose_1960.jpg", "Psycho", 1960);
addFilm("shining_1980.jpg", "The Shining", 1980);
addFilm("star_wars_episode_iv_un_nouvel_espoir_1977.jpg", "Star Wars IV", 1977);
addFilm("sunshine_2007.png", "Sunshine", 2007);
addFilm("the_dark_knight_2008.jpg", "The Dark Knight", 2008);
addFilm("tigre_et_dragon_2000.jpg", "Crouching Tiger, Hidden Dragon", 2000);
addFilm("titanic_1997.jpg", "Titanic", 1997);
addFilm("toy_story_1995.jpg", "Toy Story", 1995);
addFilm("usual_suspects_1995.jpg", "The Usual Suspects", 1995);
addFilm("v_pour_vendetta_2006.jpg", "V for Vendetta", 2006);
addFilm("wallace_gromit_une_grande_excursion_1989.jpg", "Wallace & Gromit: A Grand Day Out", 1989);
addFilm("your_name_2016.jpg", "Your Name", 2016);
addFilm("Indiana_Jones_Raiders_of_the_Lost_Ark_1981.jpg", "Indiana Jones 1", 1981);
addFilm("Ghost_Dog_The_Way_of_the_Samurai_1999.png", "Ghost Dog", 1999);
addFilm("Leon_1994.jpg", "Leon", 1994);
addFilm("die_hard_1988.jpg", "Die Hard 1", 1988);
addFilm("the_martian_2015.jpeg", "The Martian", 2015);
addFilm("drive_2011.jpg", "Drive", 2011);
addFilm("green_book_2018.jpg", "Green Book", 2018);
addFilm("parasite_2019.jpg", "Parasite", 2019);
addFilm("pulp_fiction_1994.jpg", "Pulp Fiction", 1994);
addFilm("blade_runner_1982.jpg", "Blade Runner", 1982);
addFilm("the_godfather_1972.jpg", "The Godfather", 1972);
addFilm("forrest_gump_1994.JPG", "Forrest Gump", 1994);
addFilm("the_lord_of_the_rings_the_fellowship_of_the_ring_2001.jpg", "The Lord of the Rings", 2001);
addFilm("the_matrix_1999.png", "The Matrix", 1999);
addFilm("back_to_the_future_1985.jpg", "Back to the Future", 1985);
addFilm("gladiator_2000.jpg", "Gladiator", 2000);
addFilm("se7en_1995.jpg", "se7en", 1995);
addFilm("les_evades_1994.jpg", "The Shawshank Redemption", 1994);
addFilm("the_big_lebowski_1998.jpg", "The Big Lebowski", 1998);
addFilm("the_green_mile_1999.jpg", "The Green Mile", 1999);
addFilm("inglourious_basterds_2009.jpg", "Inglourious Basterds", 2009);
addFilm("jurassic_park_1993.jpg", "Jurassic Park 1", 1993);
addFilm("snatch_2000.jpg", "Snatch", 2000);
addFilm("lost_in_translation_2003.jpg", "Lost in Translation", 2003);
addFilm("the_prestige_2006.jpg", "The Prestige", 2006);
addFilm("The_Grand_Budapest_Hotel_2014.jpg", "The Grand Budapest Hotel", 2014);
addFilm("full_metal_jacket_1987.jpg", "Full Metal Jacket", 1987);
addFilm("terminator_1984.jpg", "Terminator 1", 1984);
addFilm("fenetre_sur_cour_1954.jpg", "Rear Window", 1954);
addFilm("1917_2019.jpg", "1917", 2019);
addFilm("le_dictateur_1940.jpg", "The Great Dictator", 1940);
addFilm("gran_torino_2008.jpg", "Gran Torino", 2008);
addFilm("les_ailes_du_desirs_1987.jpg", "Der Himmel über Berlin", 1987);
addFilm("whiplash_2014.jpg", "Whiplash", 2014);
addFilm("Il_faut_sauver_le_soldat_Ryan_1998.jpeg", "Saving Private Ryan", 1998);
addFilm("le_discours_dun_roi_2010.jpg", "The King's Speech", 2010);
addFilm("scarface_1983.jpg", "Scarface", 1983);
addFilm("taxi_driver_1976.jpg", "Taxi Driver", 1976);
addFilm("la_nuit_du_chasseur_1955.jpg", "The Night of the Hunter", 1955);
addFilm("amelie_poulain_2001.jpg", "Amelie Poulain", 2001);
addFilm("rocky_1976.jpg", "Rocky 1", 1976);
addFilm("lord_of_war_2005.jpg", "Lord of War", 2005);
addFilm("citizen_kane_1941.jpg", "Citizen Kane", 1941);