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

var cards = [];

function addCard(url, nom, date) {
  cards.push(new Carte(url, nom, date));
}

const params = new URLSearchParams(document.location.search);
const type = params.get("type");
switch (type) {
  case "movies": {
    addCard(
      "../../data/movies/2001_lodyssee_de_lespace_1968.jpg",
      "2001: A Space Odyssey",
      1968
    );
    addCard("../../data/movies/alien_1979.jpg", "Alien", 1979);
    addCard(
      "../../data/movies/apocalypse_now_1979.jpg",
      "Apocalypse now",
      1979
    );
    addCard("../../data/movies/avatar_2009.jpg", "Avatar", 2009);
    addCard("../../data/movies/bienvenu_a_gattaca_1997.jpg", "Gattaca", 1997);
    addCard("../../data/movies/big_fish_2003.jpg", "Big Fish", 2003);
    addCard(
      "../../data/movies/bonnie_and_clyde_1967.jpg",
      "Bonnie & Clyde",
      1967
    );
    addCard(
      "../../data/movies/captain_fantastic_2016.jpg",
      "Captain Fantastic",
      2016
    );
    addCard("../../data/movies/casablanca_1942.jpg", "Casablanca", 1942);
    addCard("../../data/movies/casino_1995.jpg", "Casino", 1995);
    addCard(
      "../../data/movies/douze_hommes_en_colere_1957.jpg",
      "12 Angry Men",
      1957
    );
    addCard(
      "../../data/movies/elephant_man_1980.jpg",
      "The Elephant Man",
      1980
    );
    addCard("../../data/movies/fantasia_1940.jpg", "Fantasia", 1940);
    addCard("../../data/movies/fight_club_1999.jpg", "Fight Club", 1999);
    addCard(
      "../../data/movies/good_will_hunting_1997.jpg",
      "Good Will Hunting",
      1997
    );
    addCard(
      "../../data/movies/harry_potter_a_lecole_des_sorciers_2001.jpg",
      "Harry Potter 1",
      2001
    );
    addCard("../../data/movies/her_2013.jpg", "Her", 2013);
    addCard("../../data/movies/inception_2010.jpg", "Inception", 2010);
    addCard("../../data/movies/intouchables_2011.jpg", "Intouchables", 2011);
    addCard("../../data/movies/kill_bill_2003.jpg", "Kill Bill", 2003);
    addCard("../../data/movies/king_kong_2005.jpg", "King Kong", 2005);
    addCard(
      "../../data/movies/la_guerre_des_mondes_1953.jpg",
      "War of the Worlds",
      1953
    );
    addCard(
      "../../data/movies/la_guerre_des_mondes_2005.jpg",
      "War of the Worlds",
      2005
    );
    addCard("../../data/movies/la_la_land_2016.png", "La la land", 2016);
    addCard(
      "../../data/movies/la_planete_des_singes_1968.jpg",
      "Planet of the Apes",
      1968
    );
    addCard(
      "../../data/movies/Larrivee_dun_train_en_gare_de_la_ciotat_1896.jpg",
      "L'arrivée d'un train en gare de la Ciotat",
      1896
    );
    addCard(
      "../../data/movies/le_bon_la_brute_et_le_truand_1966.jpg",
      "The Good, the Bad and the Ugly",
      1966
    );
    addCard(
      "../../data/movies/le_bouton_de_nacre_2015.jpg",
      "The Pearl Button",
      2015
    );
    addCard(
      "../../data/movies/le_loup_de_wall_street_2013.jpg",
      "The Wolf of Wall Street",
      2013
    );
    addCard(
      "../../data/movies/le_silence_des_agneaux_1991.jpg",
      "The Silence of the Lambs",
      1991
    );
    addCard(
      "../../data/movies/Le_voyage_dans_la_lune_1902.jpg",
      "A Trip to the Moon",
      1902
    );
    addCard(
      "../../data/movies/le_voyage_de_chihiro_2001.jpg",
      "Spirited Away",
      2001
    );
    addCard(
      "../../data/movies/les_demoiselles_de_rochefort_1967.jpg",
      "The Young Girls of Rochefort",
      1967
    );
    addCard("../../data/movies/les_dents_de_la_mer_1975.jpg", "Jaws", 1975);
    addCard(
      "../../data/movies/Letrange_noel_de_monsieur_jack_1993.jpg",
      "The Nightmare Before Christmas",
      1993
    );
    addCard("../../data/movies/lexorcist_1973.jpg", "The Exorcist", 1973);
    addCard("../../data/movies/mars_attack_1996.png", "Mars Attacks!", 1996);
    addCard("../../data/movies/memento_2000.jpg", "Memento", 2000);
    addCard(
      "../../data/movies/monty_python_sacre_graal_1975.jpg",
      "Monty Python and the Holy Grail",
      1975
    );
    addCard(
      "../../data/movies/ne_un_4_juillet_1989.jpg",
      "Born on the Fourth of July",
      1989
    );
    addCard("../../data/movies/oceans_2009.jpg", "Oceans", 2009);
    addCard(
      "../../data/movies/orange_mecanique_1971.jpg",
      "A Clockwork Orange",
      1971
    );
    addCard("../../data/movies/out_of_africa_1985.jpg", "Out of Africa", 1985);
    addCard("../../data/movies/persepolis_2007.jpg", "Persepolis", 2007);
    addCard(
      "../../data/movies/pirates_des_caraibes_1_2003.jpg",
      "Pirates of the Caribbean 1",
      2003
    );
    addCard("../../data/movies/psychose_1960.jpg", "Psycho", 1960);
    addCard("../../data/movies/shining_1980.jpg", "The Shining", 1980);
    addCard(
      "../../data/movies/star_wars_episode_iv_un_nouvel_espoir_1977.jpg",
      "Star Wars IV",
      1977
    );
    addCard("../../data/movies/sunshine_2007.png", "Sunshine", 2007);
    addCard(
      "../../data/movies/the_dark_knight_2008.jpg",
      "The Dark Knight",
      2008
    );
    addCard(
      "../../data/movies/tigre_et_dragon_2000.jpg",
      "Crouching Tiger, Hidden Dragon",
      2000
    );
    addCard("../../data/movies/titanic_1997.jpg", "Titanic", 1997);
    addCard("../../data/movies/toy_story_1995.jpg", "Toy Story", 1995);
    addCard(
      "../../data/movies/usual_suspects_1995.jpg",
      "The Usual Suspects",
      1995
    );
    addCard(
      "../../data/movies/v_pour_vendetta_2006.jpg",
      "V for Vendetta",
      2006
    );
    addCard(
      "../../data/movies/wallace_gromit_une_grande_excursion_1989.jpg",
      "Wallace & Gromit: A Grand Day Out",
      1989
    );
    addCard("../../data/movies/your_name_2016.jpg", "Your Name", 2016);
    addCard(
      "../../data/movies/Indiana_Jones_Raiders_of_the_Lost_Ark_1981.jpg",
      "Indiana Jones 1",
      1981
    );
    addCard(
      "../../data/movies/Ghost_Dog_The_Way_of_the_Samurai_1999.png",
      "Ghost Dog",
      1999
    );
    addCard("../../data/movies/Leon_1994.jpg", "Leon", 1994);
    addCard("../../data/movies/die_hard_1988.jpg", "Die Hard 1", 1988);
    addCard("../../data/movies/the_martian_2015.jpeg", "The Martian", 2015);
    addCard("../../data/movies/drive_2011.jpg", "Drive", 2011);
    addCard("../../data/movies/green_book_2018.jpg", "Green Book", 2018);
    addCard("../../data/movies/parasite_2019.jpg", "Parasite", 2019);
    addCard("../../data/movies/pulp_fiction_1994.jpg", "Pulp Fiction", 1994);
    addCard("../../data/movies/blade_runner_1982.jpg", "Blade Runner", 1982);
    addCard("../../data/movies/the_godfather_1972.jpg", "The Godfather", 1972);
    addCard("../../data/movies/forrest_gump_1994.JPG", "Forrest Gump", 1994);
    addCard(
      "../../data/movies/the_lord_of_the_rings_the_fellowship_of_the_ring_2001.jpg",
      "The Lord of the Rings",
      2001
    );
    addCard("../../data/movies/the_matrix_1999.png", "The Matrix", 1999);
    addCard(
      "../../data/movies/back_to_the_future_1985.jpg",
      "Back to the Future",
      1985
    );
    addCard("../../data/movies/gladiator_2000.jpg", "Gladiator", 2000);
    addCard("../../data/movies/se7en_1995.jpg", "se7en", 1995);
    addCard(
      "../../data/movies/les_evades_1994.jpg",
      "The Shawshank Redemption",
      1994
    );
    addCard(
      "../../data/movies/the_big_lebowski_1998.jpg",
      "The Big Lebowski",
      1998
    );
    addCard(
      "../../data/movies/the_green_mile_1999.jpg",
      "The Green Mile",
      1999
    );
    addCard(
      "../../data/movies/inglourious_basterds_2009.jpg",
      "Inglourious Basterds",
      2009
    );
    addCard(
      "../../data/movies/jurassic_park_1993.jpg",
      "Jurassic Park 1",
      1993
    );
    addCard("../../data/movies/snatch_2000.jpg", "Snatch", 2000);
    addCard(
      "../../data/movies/lost_in_translation_2003.jpg",
      "Lost in Translation",
      2003
    );
    addCard("../../data/movies/the_prestige_2006.jpg", "The Prestige", 2006);
    addCard(
      "../../data/movies/The_Grand_Budapest_Hotel_2014.jpg",
      "The Grand Budapest Hotel",
      2014
    );
    addCard(
      "../../data/movies/full_metal_jacket_1987.jpg",
      "Full Metal Jacket",
      1987
    );
    addCard("../../data/movies/terminator_1984.jpg", "Terminator 1", 1984);
    addCard("../../data/movies/fenetre_sur_cour_1954.jpg", "Rear Window", 1954);
    addCard("../../data/movies/1917_2019.jpg", "1917", 2019);
    addCard(
      "../../data/movies/le_dictateur_1940.jpg",
      "The Great Dictator",
      1940
    );
    addCard("../../data/movies/gran_torino_2008.jpg", "Gran Torino", 2008);
    addCard(
      "../../data/movies/les_ailes_du_desirs_1987.jpg",
      "Der Himmel über Berlin",
      1987
    );
    addCard("../../data/movies/whiplash_2014.jpg", "Whiplash", 2014);
    addCard(
      "../../data/movies/Il_faut_sauver_le_soldat_Ryan_1998.jpeg",
      "Saving Private Ryan",
      1998
    );
    addCard(
      "../../data/movies/le_discours_dun_roi_2010.jpg",
      "The King's Speech",
      2010
    );
    addCard("../../data/movies/scarface_1983.jpg", "Scarface", 1983);
    addCard("../../data/movies/taxi_driver_1976.jpg", "Taxi Driver", 1976);
    addCard(
      "../../data/movies/la_nuit_du_chasseur_1955.jpg",
      "The Night of the Hunter",
      1955
    );
    addCard(
      "../../data/movies/amelie_poulain_2001.jpg",
      "Amelie Poulain",
      2001
    );
    addCard("../../data/movies/rocky_1976.jpg", "Rocky 1", 1976);
    addCard("../../data/movies/lord_of_war_2005.jpg", "Lord of War", 2005);
    addCard("../../data/movies/citizen_kane_1941.jpg", "Citizen Kane", 1941);

    break;
  }
  case "actors": {
    addCard("../../data/actors/adam_driver_1983.jpg", "Adam Driver", 1983);
    addCard("../../data/actors/aishwarya_rai_1973.jpg", "Aishwarya Rai", 1973);
    addCard("../../data/actors/al_pacino_1940.jpg", "Al Pacino", 1940);
    addCard("../../data/actors/alan_rickman_1946.jpg", "Alan Rickman", 1946);
    addCard(
      "../../data/actors/angelina_jolie_1975.jpg",
      "Angelina Jolie",
      1975
    );
    addCard("../../data/actors/anne_hathaway_1982.jpg", "Anne Hathaway", 1982);
    addCard(
      "../../data/actors/audrey_hepburn_1929.jpg",
      "Audrey Hepburn",
      1929
    );
    addCard("../../data/actors/awkwafina_1988.jpg", "Awkwafina", 1988);
    addCard("../../data/actors/ben_affleck_1972.jpg", "Ben Affleck", 1972);
    addCard(
      "../../data/actors/benedict_cumberbatch_1976.jpg",
      "Benedict Cumberbatch",
      1976
    );
    addCard("../../data/actors/brad_pitt_1963.jpg", "Brad Pitt", 1963);
    addCard(
      "../../data/actors/bradley_cooper_1975.jpg",
      "Bradley Cooper",
      1975
    );
    addCard("../../data/actors/bruce_willis_1955.jpg", "Bruce Willis", 1955);
    addCard("../../data/actors/cary_grant_1904.jpg", "Cary Grant", 1904);
    addCard(
      "../../data/actors/charlie_chaplin_1889.jpg",
      "Charlie Chaplin",
      1889
    );
    addCard(
      "../../data/actors/charlize_theron_1975.jpg",
      "Charlize Theron",
      1975
    );
    addCard(
      "../../data/actors/chris_hemsworth_1983.jpg",
      "Chris Hemsworth",
      1983
    );
    addCard("../../data/actors/chris_pratt_1979.jpg", "Chris Pratt", 1979);
    addCard(
      "../../data/actors/christian_bale_1974.jpg",
      "Christian Bale",
      1974
    );
    addCard("../../data/actors/daniel_craig_1968.jpg", "Daniel Craig", 1968);
    addCard(
      "../../data/actors/daniel_radcliffe_1989.jpg",
      "Daniel Radcliffe",
      1989
    );
    addCard(
      "../../data/actors/dwayne_johnson_1972.jpg",
      "Dwayne Johnson",
      1972
    );
    addCard("../../data/actors/emilia_clarke_1986.jpg", "Emilia Clarke", 1986);
    addCard("../../data/actors/emilie_blunt_1983.jpg", "Emilie Blunt", 1983);
    addCard("../../data/actors/emma_roberts_1991.jpg", "Emma Roberts", 1991);
    addCard("../../data/actors/emma_stone_1988.jpg", "Emma Stone", 1988);
    addCard("../../data/actors/emma_thompson_1959.jpg", "Emma Thompson", 1959);
    addCard("../../data/actors/emma_watson_1990.jpg", "Emma Watson", 1990);
    addCard("../../data/actors/gal_gadot_1985.jpg", "Gal Gadot", 1985);
    addCard(
      "../../data/actors/george_clooney_1961.jpg",
      "George Clooney",
      1961
    );
    addCard("../../data/actors/harrison_ford_1942.jpg", "Harrison Ford", 1942);
    addCard("../../data/actors/helen_mirren_1945.jpg", "Helen Mirren", 1945);
    addCard(
      "../../data/actors/helena_bonham_carter_1966.jpg",
      "Helena Bonham Carter",
      1966
    );
    addCard("../../data/actors/hugh_grant_1960.jpg", "Hugh Grant", 1960);
    addCard("../../data/actors/hugh_jackman_1968.jpg", "Hugh Jackman", 1968);
    addCard("../../data/actors/idris_elba_1972.jpg", "Idris Elba", 1972);
    addCard("../../data/actors/jackie_chan_1954.jpg", "Jackie Chan", 1954);
    addCard(
      "../../data/actors/jake_gyllenhaal_1980.jpg",
      "Jake Gyllenhaal",
      1980
    );
    addCard("../../data/actors/jason_statham_1967.jpg", "Jason Statham", 1967);
    addCard(
      "../../data/actors/jennifer_aniston_1969.jpg",
      "Jennifer Aniston",
      1969
    );
    addCard(
      "../../data/actors/jennifer_garner_1972.jpg",
      "Jennifer Garner",
      1972
    );
    addCard(
      "../../data/actors/jennifer_lawrence_1990.jpg",
      "Jennifer Lawrence",
      1990
    );
    addCard(
      "../../data/actors/jessica_chastain_1977.jpg",
      "Jessica Chastain",
      1977
    );
    addCard("../../data/actors/jim_carrey_1962.jpg", "Jim Carrey", 1962);
    addCard(
      "../../data/actors/joaquin_phoenix_1974.jpg",
      "Joaquin Phoenix",
      1974
    );
    addCard("../../data/actors/jodie_foster_1962.jpg", "Jodie Foster", 1962);
    addCard("../../data/actors/johnny_depp_1963.jpg", "Johnny Depp", 1963);
    addCard("../../data/actors/jude_law_1972.jpg", "Jude Law", 1972);
    addCard("../../data/actors/julia_roberts_1967.jpg", "Julia Roberts", 1967);
    addCard("../../data/actors/julie_walters_1950.jpg", "Julie Walters", 1950);
    addCard(
      "../../data/actors/kate_blanchett_1969.jpg",
      "Cate Blanchett",
      1969
    );
    addCard("../../data/actors/kate_winslet_1975.jpg", "Kate Winslet", 1975);
    addCard(
      "../../data/actors/keira_knightley_1985.jpg",
      "Keira Knightley",
      1985
    );
    addCard("../../data/actors/kirsten_dunst_1982.jpg", "Kirsten Dunst", 1982);
    addCard(
      "../../data/actors/kristen_steward_1990.jpg",
      "Kristen Stewart",
      1990
    );
    addCard(
      "../../data/actors/leonardo_dicaprio_1974.jpg",
      "Leonardo DiCaprio",
      1974
    );
    addCard("../../data/actors/lily_collins_1989.jpg", "Lily Collins", 1989);
    addCard("../../data/actors/lily_james_1989.jpg", "Lily James", 1989);
    addCard(
      "../../data/actors/louis_de_funes_1914.jpg",
      "Louis de Funes",
      1914
    );
    addCard("../../data/actors/maggie_smith_1934.jpg", "Maggie Smith", 1934);
    addCard("../../data/actors/margot_robbie_1990.jpg", "Margot Robbie", 1990);
    addCard(
      "../../data/actors/marilyn_monroe_1926.jpg",
      "Marilyn Monroe",
      1926
    );
    addCard(
      "../../data/actors/marion_cotillard_1975.jpg",
      "Marion Cotillard",
      1975
    );
    addCard("../../data/actors/mark_ruffalo_1967.jpg", "Mark Ruffalo", 1967);
    addCard(
      "../../data/actors/marlene_dietrich_1901.jpg",
      "Marlene Dietrich",
      1901
    );
    addCard("../../data/actors/matt_daemon_1970.jpg", "Matt Damon", 1970);
    addCard(
      "../../data/actors/matthew_mcconaughey_1969.jpg",
      "Matthew McConaughey",
      1969
    );
    addCard("../../data/actors/meryl_streep_1949.jpg", "Meryl Streep", 1949);
    addCard(
      "../../data/actors/michael_fassbender_1977.jpg",
      "Michael Fassbender",
      1977
    );
    addCard("../../data/actors/michelle_yeoh_1962.jpg", "Michelle Yeoh", 1962);
    addCard(
      "../../data/actors/millie_bobby_brown_2004.jpg",
      "Millie Bobby Brown",
      2004
    );
    addCard(
      "../../data/actors/morgan_freeman_1937.jpg",
      "Morgan Freeman",
      1937
    );
    addCard(
      "../../data/actors/natalie_portman_1981.jpg",
      "Natalie Portman",
      1981
    );
    addCard("../../data/actors/nicolas_cage_1964.jpg", "Nicolas Cage", 1964);
    addCard("../../data/actors/nicole_kidman_1967.jpg", "Nicole Kidman", 1967);
    addCard("../../data/actors/omar_sy_1978.jpg", "Omar Sy", 1978);
    addCard("../../data/actors/owen_wilson_1968.jpg", "Owen Wilson", 1968);
    addCard("../../data/actors/penelope_cruz_1974.jpg", "Penelope Cruz", 1974);
    addCard(
      "../../data/actors/pierce_brosnan_1953.jpg",
      "Pierce Brosnan",
      1953
    );
    addCard("../../data/actors/pierre_niney_1989.jpg", "Pierre Niney", 1989);
    addCard(
      "../../data/actors/rachel_mcadams_1978.jpg",
      "Rachel McAdams",
      1978
    );
    addCard(
      "../../data/actors/reese_witherspoon_1976.jpg",
      "Reese Witherspoon",
      1976
    );
    addCard(
      "../../data/actors/robert_de_niro_1943.jpg",
      "Robert de Niro",
      1943
    );
    addCard(
      "../../data/actors/robet_pattinson_1986.jpg",
      "Robert Pattinson",
      1986
    );
    addCard("../../data/actors/ryan_gosling_1980.jpg", "Ryan Gosling", 1980);
    addCard("../../data/actors/ryan_reynolds_1976.jpg", "Ryan Reynolds", 1976);
    addCard(
      "../../data/actors/samuel_l_jackson_1948.jpg",
      "Samuel L. Jackson",
      1948
    );
    addCard(
      "../../data/actors/sandra_bullock_1964.jpg",
      "Sandra Bullock",
      1964
    );
    addCard(
      "../../data/actors/scarlett_johansson_1983.jpg",
      "Scarlett Johansson",
      1983
    );
    addCard("../../data/actors/sean_connery_1930.jpg", "Sean Connery", 1930);
    addCard("../../data/actors/song_kang_ho_1967.jpg", "Song Kang-ho", 1967);
    addCard(
      "../../data/actors/tessa_thompson_1983.jpg",
      "Tessa Thompson",
      1983
    );
    addCard(
      "../../data/actors/timothee_chalamet_1995.jpg",
      "Timothée Chalamet",
      1995
    );
    addCard("../../data/actors/tom_cruise_1962.jpg", "Tom Cruise", 1962);
    addCard("../../data/actors/tom_hanks_1956.jpg", "Tom Hanks", 1956);
    addCard(
      "../../data/actors/vincent_cassel_1966.jpg",
      "Vincent Cassel",
      1966
    );
    addCard("../../data/actors/viola_davis_1965.jpg", "Viola Davis", 1965);
    addCard("../../data/actors/will_smith_1968.jpg", "Will Smith", 1968);
    addCard("../../data/actors/zac_efron_1987.jpg", "Zac Efron", 1987);
    addCard("../../data/actors/zendaya_1996.jpg", "Zendaya", 1996);
    addCard("../../data/actors/zoe_saldana_1978.jpg", "Zoe Saldana", 1978);

    break;
  }
}
