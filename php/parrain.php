<?php 
	header("content-type: text/plain");


		if (!empty($_REQUEST["prenom"])) {

			$prenom = $_REQUEST["prenom"];
		 	if (!empty($_REQUEST["nom"])) {
		 		
		 		$nom = $_REQUEST["nom"];
		 		if (!empty($_REQUEST["date"])) {
		 			
		 			$date = $_REQUEST["date"];

		 		}else echo "Veillez saisir votre date de naissance";
		 	}else echo "La case NOM est vide";
		 }else echo "la case PRENOM est vide";

		
		
?>