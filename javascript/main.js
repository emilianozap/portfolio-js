const nav = document.querySelector("#nav")
const open = document.querySelector("#abrir")
const close = document.querySelector("#cerrar")
const renderCarrusel = document.querySelector(".swiper-card")
const herramientas = document.querySelector("#skills")

const renderCart = (project)=>{
	const { image, title,  description , href} = project
	return`
	<div class ="project">
	<img src="${image}" alt="${title}" />
	<div class="card-description">
	  <div class="card-title">
		<h4>${title}</h4>
	  </div>
	  <div class="card-text">
		<p>${description}</p>
	  </div>
	  <div class="card-link">
		<a href="${href}">Ver más</a>
	  </div>
	</div>
	</div>
	`
}




const renderProjects = (productsList) => {
	renderCarrusel.innerHTML += productsList.map(renderCart).join(" ")
}


//render Herramientas

const cardHerramientas = (herramienta) =>{
	const {image, title} = herramienta;
	return`
	<div class ="cardHerramientas">
	<img
	class="img-herramientas"
	src="${image}"
	alt="${title}"
  />
  <p class="text">${title}</p>
 </div>
  `
  
}

const renderHerramientas= (herramientaList)=>{
	herramientas.innerHTML += herramientaList.map(cardHerramientas).join("")

}









const init = ()=>{
 renderProjects (projects)
 renderHerramientas(skills)

};
init()


open.addEventListener("click", ()=>{
	nav.classList.add("visible")
})


close.addEventListener("click", ()=>{
	nav.classList.remove("visible")
})


const enlaces = document.querySelectorAll("#link")

enlaces.forEach((enlace) => {
	enlace.addEventListener("click", () => {
	  nav.classList.remove("visible");
	});
  });

console.log(enlaces);











/*hero animación letras */

const typed = new Typed(`.typed`, {
    strings: [
       `<i class="saludo">Emiliano Zapata</i>` ,
        `<i class="saludo">Full Stack Dev</i>`
        ],
        stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato


});


//carrucel

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  590: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  690: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	
      1240: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	} 
    });

	// render carrusel
