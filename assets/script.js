// Tableau contenant les informations des diapositives : image et texte.
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
];

// Sélection des éléments HTML pour la navigation et l'affichage.
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
// Variable pour garder la diapositive actuelle.
let currentSlide = 0; 
// Fonction qui met à jour l'image, le texte, et les points actifs.
function updateSlide(index) {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;

    bannerText.innerHTML = slides[index].tagLine;
    // Mise à jour de la sélection des points pour refléter la diapositive active.   
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.classList.remove('dot_selected');
        if (dotIndex === index) {
            dot.classList.add('dot_selected');
        }
    });
}
// Événement pour la flèche gauche, qui permet de naviguer vers la diapositive précédente.
arrowLeft.addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide(currentSlide);
});
// Événement pour la flèche droite, qui permet de naviguer vers la diapositive suivante.
arrowRight.addEventListener('click', function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
});
// Fonction pour créer les points (dots) du carrousel, un pour chaque diapositive.
function createDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
}
// Initialisation : création des points et affichage de la première diapositive.
createDots();

updateSlide(currentSlide);
