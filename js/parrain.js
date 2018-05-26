//Mode ASYNCHRONE


var objetXHR = instancierXHR();
var submit = document.querySelector("submit");
submit.addEventListener("click", function() {
	// body...
	


	var prenom = document.querySelector("prenom").value;
	var nom = document.querySelector("nom").value;
	var date = document.querySelector("date").value;
	var pays = document.querySelector("pays[]").value;
	var email = document.querySelector("email").value;
	var numero = document.querySelector("numero").value;
	var filiere = document.querySelector("filiere[]").value;
	var niveau = document.querySelector("niveau[]").value;



	objetXHR.onreadystatechange = actualiserPage;	
	//onreadystatechange : contient le gestionnaire d’évènement à appeler à chaque changement de readyState
	objetXHR.open("post", "./parrain.php");
	objetXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	objetXHR.send("entier="+entier, "prenom="+prenom, "nom="+nom, "date="+date, "pays[]="+pays,
	 				"email="+email, "numero="+numero, "filiere[]="+filiere, "niveau[]="+niveau);
});

function actualiserPage () {
	// body... 
    // test du statut de retour de la requête AJAX
    //readyState = Etat de l'objet XHR au cours de la requete:
    //status : code de la reponse http reçue depuis le serveur 
        if (objetXHR.readyState == 4 && objetXHR.status == 200) {

            // on désérialise le catalogue et on le sauvegarde dans une variable
        	var resultat = document.getElementById("resultat");
            resultat.innerHTML = objetXHR.responseText; 
        }              
}