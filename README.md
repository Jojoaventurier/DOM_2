Exercice guidé de formation : introduction à la manipulation du DOM avec Javascript.

  Il s'agit de créer un petit jeu sur navigateur dont voici les règles :
    - La page présente différentes boîtes contenant chacune un numéro. Cest boîtes forment une suite arithmétique logique (soit 5 boîtes : boîte n°1, boîte n°2 etc.
    - La joueur doit cliquer sur chaque boîte dans l'ordre (boîte 1, puis boîte 2 etc.) Une boîte cliquée est validée, son aspect devra changer pour informer visuellement le joueur de son action. 
    - Si le joueur se trompe de boîte (en cliquant sur la 4 juste après avoir cliqué sur la 2, par exemple), le jeu redémarre à zéro. Il lui faudra donc cliquer de nouveau sur la boîte 1 et ainsi de suite. 
    - Une fois que la dernière boîte est cliquée dans l'ordre imposé, un message de victoire doit apparaître. 
    - Enfin, si le joueur clique sur une boîte précédemment validée (le jeu attendait qu'il clique sur la boîte 4 mais le clic a eu lieu sur la boîte 2), un message le prévient que cette boîte a déjà été cliquée, mais le jeu ne s'arrête pas pour autant.
    - Fonctionnalités annexes (mises en place) :
      - Demander le nombre de boîtes de départ au joueur (en utilisant prompt())
      - Remélanger les boîtes en cas d'erreur, ainsi le joueur ne pourra plus compter sur sa mémoire visuelle.
      - les boîtes se remélangent à chaque clic valide, rendant le jeu plus difficile. 
  
