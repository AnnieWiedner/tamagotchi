// name the pet

function namePet() {
	var name = prompt("Please enter a name for your pet");
	var body = document.body;
	var h1 = document.createElement('h1');
	var t = document.createTextNode(name);
	var div = document.getElementsByTagName('div')[0];
	h1.appendChild(t);
	div.appendChild(h1);
}

namePet();


// make the Tomagotchi move

var position = 0;
var right = true;

setInterval(function(){

	if(right) {
		position++;
		if(position==3) {
			right = false;
		}
	}
	else {
		position--;
		if(position===0){
			right = true;
		}
	}

	$('.dog').css("opacity", "0");
	$('#dog-' + position).css("opacity", "1");
},
2000);



// depreciating hunger

var hungry = 1;
document.getElementById("hunger-meter").innerHTML = hungry;
setInterval(function(){

	if(hungry <= 10) {
		hungry = hungry + 1;
		document.getElementById("hunger-meter").innerHTML = hungry;
	}

	else {
		alert("Your dog has died")
	}

},
5000);


// depreciating sleep

var sleepy = 1;
document.getElementById("sleepy-meter").innerHTML = sleepy;
setInterval(function(){
	if(sleepy <= 10) {
		sleepy = sleepy + 1;
		document.getElementById("sleepy-meter").innerHTML = sleepy;
	}

	else {
		alert("Your dog has died")
	}

},
6000);



// depreciating happiness

var happy = 1;
document.getElementById("happy-meter").innerHTML = happy;
setInterval(function(){

	if(happy <= 10) {
		happy = happy + 1;
		document.getElementById("happy-meter").innerHTML = happy;
	}

	else {
		alert("Your dog has died")
	}

},
10000);


// lights on and off switch
// could you explain to me why this only works if I click the button twice to start?

$('#sleep').click(function() {
	sleepy = 1;
	document.getElementById("sleepy-meter").innerHTML = sleepy;

	if(document.getElementById('flex').style.backgroundColor ==="white") {
		document.getElementById('flex').style.backgroundColor= "black"
	}
	else {
		document.getElementById('flex').style.backgroundColor= "white"

	}

})

// feeding pet, hunger goes to 1

$('#feed').click(function() {
	hungry = 1;
	document.getElementById("hunger-meter").innerHTML = hungry;

})



// playing with pet, happiness goes to 1

$('#play').click(function() {
	happy = 1;
	document.getElementById("happy-meter").innerHTML = happy;

})



// increasing age

var age = 1;

document.getElementById("age-meter").innerHTML = age;
setInterval(function(){
	
	age = age + 1;
	document.getElementById("age-meter").innerHTML = age;

// gray filter added to show age

	if (age < 20) {
		document.getElementById("dog-0").style.filter = "saturate(250%)"
		document.getElementById("dog-1").style.filter = "saturate(250%)"
		document.getElementById("dog-2").style.filter = "saturate(250%)"
		document.getElementById("dog-3").style.filter = "saturate(250%)"
	}

	else if (age < 50) {
		document.getElementById("dog-0").style.filter = "saturate(100%)"
		document.getElementById("dog-1").style.filter = "saturate(100%)"
		document.getElementById("dog-2").style.filter = "saturate(100%)"
		document.getElementById("dog-3").style.filter = "saturate(100%)"

	}

	else {
		document.getElementById("dog-0").style.filter = "grayscale(100%)"
		document.getElementById("dog-1").style.filter = "grayscale(100%)"
		document.getElementById("dog-2").style.filter = "grayscale(100%)"
		document.getElementById("dog-3").style.filter = "grayscale(100%)"
	}


},
2000);