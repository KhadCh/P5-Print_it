const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

		// récuperer les elements flèche gauche et droite
		let flecheGauche = document.querySelector("#banner .arrow_left");
		let flecheDroite = document.querySelector("#banner .arrow_right");

		// event listener sur les flèches gauche et droite
		flecheGauche.addEventListener("click", cliqueGauche); 
		flecheDroite.addEventListener("click", cliqueDroit); 


		// insertion des bullets dot dans le html
		let baliseZoneDots = document.querySelector("#banner .dots");
	
		let divDot = `
					<div class="dot">
					</div>
			`;
		// cette boucle permet d'inserer les <div class="dot"></div> dans le html		
		for (let i = 0; i < slides.length; i++ ){
			baliseZoneDots.innerHTML += divDot;	 
		}


		let baliseDivDots = document.querySelectorAll("#banner .dot");

		// cette boucle permet d'ajouter la classe "dot_selected" à la première image
		for (let i = 0; i < baliseDivDots.length; i++) {
			if (i===0)  
			{   baliseDivDots[i].classList.add("dot_selected");}
		}

		let j=1;


		// permet de récuperer l'image affiché sur la bannière
		let baliseZoneImage = document.querySelector("#banner .banner-img");
		console.log("actuellement vous etes sur l'image : "+baliseZoneImage.attributes.src.nodeValue);
        //exemple : “./assets/images/slideshow/slide3.jpg”

		// fonction du clique droite
		function cliqueDroit (){
			console.log("je viens de cliquer sur la flèche droite");
			j = positionImage(j); // cette fonction me permet de savoir quel image est affiché sur la bannière
			
		if (j< slides.length){       
				j++;		
				updateBanniere(j); // cette fonction me permet d'afficher l'image suivavnte grace a J+1
		}else{   
				j=1; // si je suis à la 4ème image, j'affiche la 1ere 
				updateBanniere(j);
		}
		}


		function cliqueGauche (){
			console.log("je viens de cliquer sur la flèche gauche");
			j = positionImage(j);

			if (j===1){
				j=4; // si je suis à la 1ere image, j'affiche la 4eme
				updateBanniere(j);

			}else{
				j--;
				updateBanniere(j);  // cette fonction me permet d'afficher l'image précedente grace a J-1
			}
		}


	  // fonction qui me permet de connaitre quel image est affiché sur la bannière
	  function positionImage(j){
		
		let Image = baliseZoneImage.attributes.src.nodeValue; 
		//exemple : Image =“./assets/images/slideshow/slide3.jpg”

		while (j<= slides.length) {

			let  baliseImageActuelle="./assets/images/slideshow/"+slides[j-1].image;
		   
			if  (Image === baliseImageActuelle)            
			{
				break;
			}else{
				j++;
			}	
		}
              return j;
	  }

	  // fonction qui permet de changer l'image au clic droit ou gauche
	  function updateBanniere(j){
		let baliseImageSuivante="./assets/images/slideshow/"+slides[j-1].image;
		baliseZoneImage.src=baliseImageSuivante;

		let bannerText = document.querySelector("#banner p");
		bannerText.innerHTML=slides[j-1].tagLine;
		
		dotSelected(j);

	  }

	 // fonction permet d'ajouter la classe "dot_selected" à l'image affiché sur la bannière
	 // et permet de la supprimer sur les images non affcihé sur la bannière
	 function dotSelected (j){

		let baliseDots = document.querySelectorAll("#banner .dot");

		for (let i = 0; i < baliseDots.length; i++) {
            if ((j-1)==i)  baliseDots[i]. classList.add("dot_selected")
            else baliseDots[i]. classList.remove("dot_selected")

        }

	  }