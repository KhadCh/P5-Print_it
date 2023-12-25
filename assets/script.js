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
console.log(flecheGauche);
console.log(flecheDroite);


flecheGauche.addEventListener("click", cliqueGauche); //fonction qui déclanche la fonction du clique gauche quand on clique sur la flèche gauche
flecheDroite.addEventListener("click", cliqueDroit); //fonction qui déclanche la fonction du clique droit quand on clique sur la flèche droite


// permet de récuperer le numéro d'image 
let baliseZoneImage = document.querySelector("#banner .banner-img");
console.log(baliseZoneImage.attributes.src);



 // insertion des bullets dot dans le html
 let baliseZoneDots = document.querySelector("#banner .dots");
console.log(baliseZoneDots);
let divDot = `
            <div class="dot">
			</div>
    `;
	// cette boucle permet d'inserer les <div class="dot"></div> da ns le html		
	for (let i = 0; i < slides.length; i++ ){
		baliseZoneDots.innerHTML += divDot;	 
	}


let baliseDivDots = document.querySelectorAll("#banner .dot");
console.log(baliseDivDots);

// cette boucle permet d'ajouter la classe "dot_selected" à la première image
for (let i = 0; i < baliseDivDots.length; i++) {
	if (i===0)  
	{   baliseDivDots[i].classList.add("dot_selected");}
}

let j=1;

// fonction du clique droite
function cliqueDroit (){
    
    j = positionImage(j); // cette fonction me permet de savoir quel image est affiché sur la bannière
	
   if (j< slides.length){       
		j++;		
        updateBanniere(j); // cette fonction me permet d'afficher l'image suivavnte grace a J+1
		//dotSelected(j);
   }else{   
		j=1; // si je suis à la 4ème image, j'affiche la 1ere 
		updateBanniere(j);
		//dotSelected(j);
   }
}


function cliqueGauche (){
    
	j = positionImage(j);

    if (j===1){

        j=4; // si je suis à la 1ere image, j'affiche la 4eme
		updateBanniere(j);

   }else{
			j--;
			updateBanniere(j);
   }

}
     // fonction permet d'ajouter la classe "dot_selected" à l'image affiché sur la bannière
	 // et permet de la supprimer sur les images non affcihé sur la bannière
      function dotSelected (j){

		let baliseDots = document.querySelectorAll("#banner .dot");
		for (let i = 0; i < baliseDots.length; i++) {
			if ((j-1)!==i)  baliseDots[i].classList.remove("dot_selected")
			else baliseDots[i].classList.add("dot_selected")
		}

	  }

	  // fonction qui me permet de savoir le numéro d'image affiché sur la bannière
	  function positionImage(j){
		
		let numeroImage = baliseZoneImage.attributes.src.nodeValue; 
		console.log(numeroImage);
		while (j<= slides.length) {

			let  baliseImageActuelle="./assets/images/slideshow/"+slides[j-1].image;
		   
			if  (numeroImage === baliseImageActuelle)            
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
		console.log(bannerText);
		dotSelected(j);

	  }