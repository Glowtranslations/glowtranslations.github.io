﻿function mainMenu() {
	document.getElementById("main-menu").innerHTML = '<a href="http://glowtranslations.tk/index.html"><div class="top-menu-item inicio">Inicio</div></a><div class="top-menu-item dropdown traducciones">Traducciones<div class="dropdown-content"><a href="http://glowtranslations.tk/stellaglow/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img style="opacity: 1;" src="http://glowtranslations.tk/images/game-sg.jpg">Stella Glow <p class="state-dropdown">Finalizado</p></div></a><a href="http://glowtranslations.tk/runefactory4/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-rf4.jpg" style="opacity: 1;">Rune Factory 4 <p class="state-dropdown">Empezando</p></div></a></div></div><a href="http://glowtranslations.tk/contactar.html"><div class="top-menu-item contacto">Contacto</div></a><a href="http://glowtranslations.tk/miembros.html"><div class="top-menu-item miembros">Miembros</div></a>';
	}
function stellaGlowSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/stellaglow/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/stellaglow/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/stellaglow/descargas.html"><div class="sub-menu-item descargas">Descargas</div></a>				<a href="http://glowtranslations.tk/stellaglow/creditos.html"><div class="sub-menu-item creditos">Créditos</div></a></div>';
}
function runeFactorySubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/runefactory4/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/runefactory4/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/runefactory4/participa.html"><div class="sub-menu-item participa">Participa</div></a>';
}
function noSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a>';
}
function footer() {	
	document.getElementById("footer").innerHTML =  'This is a nonprofit and public project by users for users. On this site you will not find any link to download the game or the demo, only the patch to translate the game into Spanish. ';
}