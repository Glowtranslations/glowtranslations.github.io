﻿function mainMenu() {
    document.getElementById("main-menu").innerHTML = '<a href="http://glowtranslations.tk/index.html"><img class="top-menu-logo" onload="this.style.opacity=1;" src="http://glowtranslations.tk/images/logo.png"><a href="http://glowtranslations.tk/index.html"><div class="top-menu-item inicio">Inicio</div></a><div class="top-menu-item dropdown traducciones">Traducciones<div class="dropdown-content"><a href="http://glowtranslations.tk/translations/stellaglow/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img style="opacity: 1; border: 1px solid #000000;" src="http://glowtranslations.tk/images/game-sg.jpg">Stella Glow <p class="state-dropdown">Finalizado</p></div></a><a href="http://glowtranslations.tk/translations/lordofmagna/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-lom.jpg" style="opacity: 1; border: 1px solid #000000;">Lord Of Magna: Maiden Heaven <p class="state-dropdown">Finalizado</p></div></a><a href="http://glowtranslations.tk/translations/runefactory4/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-rf4.jpg" style="opacity: 1; border: 1px solid #000000;">Rune Factory 4 <p class="state-dropdown">En proceso</p></div></a><a href="http://glowtranslations.tk/translations/persona4/informacion.html"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-p4.jpg" style="opacity: 1; border: 1px solid #000000;">SMT: Persona 4 <p class="state-dropdown">En proceso</p></div></a><a href="https://tradusquare.es/ficha.php?megaman-starforce-3"><div class="dropdown-item" id="stella-dropdown"><img src="http://glowtranslations.tk/images/game-msf3.jpg" style="opacity: 1; border: 1px solid #000000;">Megaman Starforce 3 <p class="state-dropdown">En proceso</p></div></a></div></div><div class="top-menu-item dropdown colaboraciones">Colaboraciones<div class="dropdown-content"><a href="https://tradusquare.es/ficha.php?rune-factory-2"><div class="dropdown-item" id="stella-dropdown"><img style="opacity: 1; border: 1px solid #000000;" src="http://glowtranslations.tk/images/game-rf2.jpg">Rune Factory 2 <p class="state-dropdown"></p></div></a></div></div><a href="http://glowtranslations.tk/contactar.html"><div class="top-menu-item contacto">Contacto</div></a><a href="http://glowtranslations.tk/faq.html"><div class="top-menu-item FAQ">FAQ</div></a><a href="http://glowtranslations.tk/miembros.html"><div class="top-menu-item miembros">Miembros</div></a>';
	}
function stellaGlowSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/translations/stellaglow/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/translations/stellaglow/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/translations/stellaglow/descargas.html"><div class="sub-menu-item descargas">Descargas</div></a>				<a href="http://glowtranslations.tk/translations/stellaglow/creditos.html"><div class="sub-menu-item creditos">Créditos</div></a></div>';
}
function runeFactorySubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/translations/runefactory4/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/translations/runefactory4/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/translations/runefactory4/progresos.html"><div class="sub-menu-item progresos">Progresos</div></a>				<a href="http://glowtranslations.tk/translations/runefactory4/miembros.html"><div class="sub-menu-item participantes">Miembros</div></a>				<!--<a href="http://glowtranslations.tk/translations/runefactory4/participa.html"><div class="sub-menu-item participa">Participa</div></a>--></div>';
}
function lordofMagnaSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/translations/lordofmagna/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/translations/lordofmagna/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/translations/lordofmagna/descargas.html"><div class="sub-menu-item descargas">Descargas</div></a>				<!--<a href="http://glowtranslations.tk/translations/lordofmagna/progresos.html"><div class="sub-menu-item progresos">Progresos</div></a>-->				<a href="http://glowtranslations.tk/translations/lordofmagna/miembros.html"><div class="sub-menu-item participantes">Miembros</div></a></div>';
}
function persona4SubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a><div class="sub-menu"><a href="http://glowtranslations.tk/translations/persona4/informacion.html"><div class="sub-menu-item informacion">Información</div>				<a href="http://glowtranslations.tk/translations/persona4/galeria.html"><div class="sub-menu-item galeria">Galería</div></a>				<a href="http://glowtranslations.tk/translations/persona4/progresos.html"><div class="sub-menu-item progresos">Progresos</div></a>				<a href="http://glowtranslations.tk/translations/persona4/miembros.html"><div class="sub-menu-item participantes">Miembros</div></a></div>';
}
function noSubMenu() {	
	document.getElementById("second-bar").innerHTML =  '<a href="http://glowtranslations.tk/index.html" style="width: 325px; display: inline-block"><div class="logo"></div></a>';
}
function footer() {	
	document.getElementById("footer").innerHTML =  'Recuerda, nuestros proyectos son sin animo de lucro por fans para fans. En este sitio no encontrarás ningún enlace para descargar un juego o una demo,<br> sólo parches para traducir el videojuego al español. Glowtranslations 2016-2018 - Página diseñada por CrusardGameamos y Darkmet98';
}

function articles() {
    document.getElementById("articles").innerHTML = '<ul><li><a href="http://glowtranslations.tk/articles/09-2018/index.html">Septiembre 2018</a></li>	<li><a href="http://glowtranslations.tk/articles/06-2018/index.html">Junio 2018</a></li>	<li><a href="http://glowtranslations.tk/articles/05-2018/index.html">Mayo 2018</a></li>	<li><a href="http://glowtranslations.tk/articles/04-2018/index.html">Abril 2018</a></li>	<li><a href="http://glowtranslations.tk/articles/02-2018/index.html">Febrero 2018</a></li>	<li><a href="http://glowtranslations.tk/articles/01-2018/index.html">Enero 2018</a></li>	<li><a href="http://glowtranslations.tk/articles/12-2017/index.html">Diciembre 2017</a></li>	<li><a href="http://glowtranslations.tk/articles/11-2017/index.html">Noviembre 2017</a></li>	<li><a href="http://glowtranslations.tk/articles/10-2017/index.html">Octubre 2017</a></li></ul>';
}