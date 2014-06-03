Où modifier le CSS 
==================

>
> Dans css/screen.css
>


Comment ajouter un article
==================

>
> - Dans js/app.js -> ajouter une route avec le nom de l'article (sous forme de slug) et donner un nom de controller
>
> - Dans js/controller.js : 
>    * dans le homeCtrl -> ajouter dans le $scope.articles les données du nouvel article
>    * créer le controller défini dans app.js et renseigner $scope.article avec les données voulues
>


Comment personnaliser la description ?
==================

>
> Le champ description de la page de chaque article interprète le HTML, tu peux donc mettre des balises dans le champs description (ex images, liens etc)
>
