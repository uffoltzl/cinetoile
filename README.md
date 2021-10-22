# cinetoile

Launch the game:
- no internet needed
- double click on homepage.html

You can find the game at https://cinetoile-timeline.netlify.app/ .

## Refactorisation

- game.js
    - add type="module" in game.html import
    - use node
- iterates on all files of data
    - var fs = require('fs');
    - var files = fs.readdirSync('/assets/photos/');

## TODO

- redimension de l'écran
- effet sonore
- espace plus grand pour les positions dans l'espace
- remember the best player
- plus d'espace en bas du board (mettre le scroll au niveau des positions)
- refacto
- automatisation load_data
