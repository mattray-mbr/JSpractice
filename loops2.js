var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for( var i=0; i < animals.length -1; i++) {
	console.log(animals[i]);
}

for( var i = 0;i < animals.length; i+=2){
	console.log(animals[i]);
}

for( var i = animals.length -1; i >= 0; i--){
	console.log(animals[i]);
}

for( var i = 0; i < animals.length; i++){
	if(i >= 1 && i <=animals.length-2) {
		console.log(animals[i]);
	}
	console.log(animals[i]);
}