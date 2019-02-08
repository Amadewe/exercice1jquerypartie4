$(function(){
  var counterVictories = 0;
  var counterLooses = 0;

$('#button').click(function(){
  // la var ramdom permet de choisir un élément au hasard pour une liste de 3 (3 car nos élèments sont 0,1,2)
  var computer = Math.floor(Math.random()*3);
  // on utilise la méthode array sur la liste de nos éléments
  // var array = ['pierre', 'feuille', 'ciseaux'];
  // var choiceComputer = array[computer];
  // maintenant on crée récupère les valeurs du player
  var player = $('.list option:selected').val();
  // var choicePlayer = array[player];

  // Bonus : Ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.
console.log(computer);

if (player == computer){
  alert ('Match nul');
} else if ((computer == 0 && player == 1) || (computer == 1 && player == 2) || (computer == 2 && player == 0)) {
alert ('Vous avez gagné');
counterVictories ++;
} else {
alert ('Vous avez perdu');
counterLooses ++;
}
alert('score joueur: ' + counterVictories + ' score ordinateur: ' + counterLooses);




//  if ((choiceComputer) == (choicePlayer)){
//    alert ('Match nul');
//  } else if ((choiceComputer == 'pierre' && choicePlayer == 'feuille') || (choiceComputer == 'feuille' && choicePlayer == 'ciseaux') || (choiceComputer == 'ciseaux' && choicePlayer == 'pierre')) {
// alert ('Vous avez gagné');
// counterVictories ++
// } else if ((choiceComputer == 'feuille' && choicePlayer == 'pierre') || (choiceComputer == 'ciseaux' && choicePlayer == 'feuille') || (choiceComputer == 'pierre' && choicePlayer == 'ciseaux')) {
// alert ('Vous avez perdu');
// counterLooses ++
// }
// alert('score joueur: ' + counterVictories + ' score ordinateur: ' + counterLooses);
// on crée une var pour le pourcentage de victoire
var percentage = Math.round((counterVictories/(counterVictories+counterLooses))*100);

// console.log(percentage);
alert('Votre pourcentage de victoire est de: ' + percentage + '%');
});
});
