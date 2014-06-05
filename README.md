Faire marcher le projet
-----------------------

>
> Pour ce faire tu dois modifier le Path par le path de ton projet depuis la racine de ton serveur (local ou non) dans :
> * dans le fichier index.html dans le head => le href de la balise base
> * Dans le .htaccess => RewriteBase /chemin/vers/ton/répertoire/depuis/ton/serveur/
>



Où modifier le CSS 
------------------

>
> Dans css/screen.css
>


Comment ajouter un article
--------------------------

>
> - Dans js/app.js -> ajouter une route avec le nom de l'article (sous forme de slug) et donner un nom de controller
>
> - Dans js/controller.js : 
>    * dans le homeCtrl -> ajouter dans le $scope.articles les données du nouvel article
>    * créer le controller défini dans app.js et renseigner $scope.article avec les données voulues
>


Comment personnaliser la description ?
--------------------------------------

>
> Le champ description de la page de chaque article interprète le HTML, tu peux donc mettre des balises dans le champs description (ex images, liens etc)
>


Que dois-je faire pour le module de commentaire de chaque article ? 
-------------------------------------------------------------------

>
> Absolument rien, chaque article créé à un flux de commentaire distinct généré automatiquement ! :D
>
