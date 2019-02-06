$(function(){
  var counterVictories = 0;
  var counterLooses = 0;

$('#button').click(function(){
  // la var ramdom permet de choisir un élément au hasard pour une liste de 3
  // il y a une version possible quand nous ne connaissons pas le nombre d'élement dans la liste
  // fonction ramdom doit etre dans ma fonction click pour gérer aléatoirement plusieurs réponses ...
  var computer = Math.floor(Math.random()*3);
  // on utilise la méthode array sur la liste de nos éléments
  var array = ['pierre', 'feuille', 'ciseaux'];
  var choiseComputer = array[computer];
  // maintenant on crée un tableau pierre feuille ciseaux pour l'utilisateur
  var player = $('option:selected').val();
  var choisePlayer = array[player];
// var du pourcentage:

// Bonus : Ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.

console.log(choiseComputer);
 if ((choiseComputer) == (choisePlayer)){
   alert ('Match nul');
 } else if ((choiseComputer == 'pierre' && choisePlayer == 'feuille') || (choiseComputer == 'feuille' && choisePlayer == 'ciseaux') || (choiseComputer == 'ciseaux' && choisePlayer == 'pierre')) {
alert ('Vous avez gagné');
counterVictories ++
} else if ((choiseComputer == 'feuille' && choisePlayer == 'pierre') || (choiseComputer == 'ciseaux' && choisePlayer == 'feuille') || (choiseComputer == 'pierre' && choisePlayer == 'ciseaux')) {
alert ('Vous avez perdu');
counterLooses ++
}
alert('score joueur: ' + counterVictories + ' score ordinateur: ' + counterLooses);
var percentage = Math.round((counterVictories/(counterVictories+counterLooses))*100);

console.log(percentage);
alert('Votre pourcentage de victoire est de: ' + percentage + '%');
});
});
