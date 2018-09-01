                                 /* Jeu de devinette */

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

/////////////////////////////////////////////////////////////////////////////////////////////////

    /* Option du jeu; choisir le nombre d'essais.Boucle while, compteur.*/

var compteur = Number(prompt("Bienvenue dans ce petit jeu. Le nombre mystérieux est compris entre 1 et 100, vous aurez besoin, certainemant, de plusieurs essais. Saisisez le nombre de tentatives souhaitées pour trouver la bonne réponse. "));

while  (isNaN(compteur)||(compteur < 0)||(compteur>12)) { // Vérification si les caractères sont correctes. 
	
   alert("Ce nombre n'est pas valide. Attention !");

   var compteur = Number(prompt(" Saisisez le nombre de tentatives souhaitées pour trouver la bonne réponse. ( 12 Essais est le maximum possible. )"));	
}
  
    /* Initialisation des variables de la boucle while, Saisi et Essai.*/

   var Essai  = 0,                  // numéro de l'éssai 
    maxEssai  = compteur - 1,       // nombre d'éssais maximum
decompteEssai = compteur;           // décompteur de Number(prompt(.    

console.log("Entrer un nombre entre 1 et 100. Au-delà de  "+compteur+"  essais infructueux, la partie est perdue. Saisir ( 0 ) pour intérompre la partie.        Bonne chance ! ");

var Saisi =Number(prompt("Entrer un nombre entre 1 et 100. Au-delà de  "+compteur+"  essais infructueux, la partie est perdue.                  Saisir ( 0 ) pour intérompre la partie.   Bonne chance !  "));	
	
while ((Saisi !== solution) && (Essai < maxEssai)) { // Tant que la solution n'est pas trouvée et essai(s) inférieur ou égal à maxEssai.
	  		
    Essai++; // Incrémenter le compteur d'essai ( même en cas d'erreur ).
	decompteEssai--;//déincrémenter le compteur de Number(prompt(.
	
    if ((Saisi < 0) || (Saisi > 100) || isNaN(Saisi)) { // Vérification si la Saisi est correcte. (Intervalle 1 à 100 et autres caractères ).
		
        
        console.log("Erreur ! Vous devez saisir un nombre entre 1 et 100. Essai n° "+Essai+".");
		
		var Saisi =Number(prompt("Erreur ! Il vous reste "+decompteEssai+" essai(s)." ));
		
    
    }
	else if (Saisi == 0) { // Le nombre 0 annule la partie.
	
		console.log("Vous avez saisi ( 0 ) , la partie est intérompue ! Rafraichir la page pour relancer une partie.");
		alert("Vous avez saisi ( 0 ) , la partie est intérompue ! Rafraichir la page pour relancer une partie.");
        break
        	
    }	
	else if (Saisi > solution) { // Le nombre saisi est supérieur à la solution.
	   
            console.log(Saisi +" est trop grand ! Essai n° "+Essai+".");
		
            var Saisi =Number(prompt(Saisi +" est trop grand !  Il vous reste "+decompteEssai+" essai(s)." ));
  	

    }
	else if (Saisi < solution) { // Le nombre saisi est inférieur à la solution.
	
		console.log(Saisi +" est trop petit ! Essai n° "+Essai+".");

        var Saisi =Number(prompt(Saisi +" est trop petit !  Il vous reste "+decompteEssai+" essai(s)." ));
		
    }			
}

if (Saisi === solution) { //  si la réponse est bonne.
	
    Essai++;// Incrémenter le compteur d'essai pour le message.
	
    console.log("Bravo ! La solution était << " + solution + " >>.  Vous avez trouvé en " + Essai + " essai(s).   Rafraichir la page pour relancer une partie.");
    
	alert("Bravo ! La solution était << " + solution + " >>.  Vous avez trouvé en " + Essai + " essai(s).   Rafraichir la page pour relancer une partie." );
 
	
} 

else if (Saisi !== 0){ // si la réponse est au maximum d'essais utilisés mais pas intérompue par 0. 
	
    Essai++;// Incrémenter le compteur d'essai pour le message.
	
    console.log("Essais n° "+ Essai +". Vous avez perdu... Vous avez utilisé tout vos essais.   La solution était << " + solution + " >>.    Rafraichir la page pour relancer une partie.");
   
    alert("Essai n° "+Essai+". Vous avez perdu... Vous avez utilisé tout vos essais. La solution était << " + solution + " >>.             Rafraichir la page pour relancer une partie.");

}









