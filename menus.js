﻿function mainMenu() {
	document.getElementById("main-menu").innerHTML = '<a href="http://glowtranslations.tk/index.html"><div class="top-menu-item inicio">Inicio</div></a><div class="top-menu-item dropdown traducciones">Traducciones<div class="dropdown-content"><a href="http://glowtranslations.tk/stellaglow/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img style="opacity: 1; border: 1px solid #000000;" src="http://glowtranslations.tk/images/game-sg.jpg">Stella Glow <p class="state-dropdown">Finalizado</p></div></a><a href="http://glowtranslations.tk/runefactory4/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-rf4.jpg" style="opacity: 1; border: 1px solid #000000;">Rune Factory 4 <p class="state-dropdown">Traduciendo</p></div></a><a href="http://glowtranslations.tk/lordofmagna/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-lom.jpg" style="opacity: 1; border: 1px solid #000000;">Lord Of Magna: Maiden Heaven <p class="state-dropdown">Empezando</p></div></a></div></div><a href="http://glowtranslations.tk/contactar.html"><div class="top-menu-item contacto">Contacto</div></a><a href="http://glowtranslations.tk/miembros.html"><div class="top-menu-item miembros">Miembros</div></a>';
	}
function stellaGlowSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/stellaglow/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/stellaglow/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/stellaglow/descargas.html"><div class="sub-menu-item descargas">Descargas</div></a>				<a href="http://glowtranslations.tk/stellaglow/creditos.html"><div class="sub-menu-item creditos">Créditos</div></a></div>';
}
function runeFactorySubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/runefactory4/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/runefactory4/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/runefactory4/progresos.html"><div class="sub-menu-item progresos">Progresos</div></a>				<a href="http://glowtranslations.tk/runefactory4/miembros.html"><div class="sub-menu-item participantes">Miembros</div></a>				<a href="http://glowtranslations.tk/runefactory4/participa.html"><div class="sub-menu-item participa">Participa</div></a></div>';
}
function lordofMagnaSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/lordofmagna/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/lordofmagna/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/lordofmagna/progresos.html"><div class="sub-menu-item progresos">Progresos</div></a>				<a href="http://glowtranslations.tk/lordofmagna/miembros.html"><div class="sub-menu-item participantes">Miembros</div></a></div>';
}
function noSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a>';
}
function footer() {	
	document.getElementById("footer").innerHTML =  'This is a nonprofit and public project by users for users. On this site you will not find any link to download the game or the demo, only the patch to translate the game into Spanish. <br> Página diseñada por CrusardGameamos ';
}