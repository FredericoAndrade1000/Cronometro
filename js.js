var segunder60 = 0, segundos = 0, minutos = 0, work = true;
function a(){
	segunder60 = segunder60 + 1;
	document.getElementById("segunder60").innerHTML = segunder60;
	document.getElementById("segundos").innerHTML = segundos;
	document.getElementById("minutos").innerHTML = minutos;
	
	if (segunder60 >= 60){
		segundos = segundos + 1;
		segunder60 = 0;
	}
	
	if(segundos >= 60){
		minutos = minutos + 1;
		segundos = 0;
	}
}

//Botões do relógio
function reset(){
	segunder60 = 0;
	segundos = 0;
	minutos = 0;
	work = true;
}
function stop(){
	work = false;
}
function contin(){
	work = true;
}

//Atualização

function update(){
	if (work == true){
		a()
	}
	window.requestAnimationFrame(update);
}
update()