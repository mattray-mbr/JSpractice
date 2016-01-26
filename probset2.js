//1
var firstReverse = function(string){
	var split = [];
	for(var i = 0; i < string.length; i++){
		split.push(string.charAt((string.length-1) - i));
	}
	return split.join('');
}
console.log(firstReverse('jumper'));
//1.2 same as 1 but with different method
var secondReverse = function(string){
	var split = '';
	for(var i = string.length -1; i >= 0; i--){
		split += string[i];
	}
	return split;
}
console.log(secondReverse("alligator"));
//1.3
var thirdReverse = function(string){
	var split = [];
	for(var i = string.length -1, j = 0; i >= 0; i --, j++){
		split[j] = string[i];
	}
	return split.join('');
}
console.log(thirdReverse("refactoru"));
//1.4
var fourthReverse = function(string){
	return string.split('').reverse().join('');
}
console.log(firstReverse('javascript'));
//1.5
var fifthReverse = function(string){
	var i = string.length,
	split = '';
	while(i > 0) {
		split += string.substring(i - 1, i);
		i--;
	}
	return split;
}
console.log(fifthReverse('sublime text'));
//1.6
var sixthReverse = function(string){
	for(var i = string.length -1, reverse = ''; i >= 0; reverse += string[i--]){	
	}
	return reverse;
}
console.log(sixthReverse('coffee'));
//1.7
var seventhReverse = function(string){
	return (string === '') ? '' : seventhReverse(string.substring(1)) + string.charAt(0);
}
console.log(seventhReverse('logistics'))


//2
var swapCase = function(string){
	var split = []
	for(i=0; i<string.length; i++){
		if(string[i] === string[i].toUpperCase()){
			split[i] = string[i].toLowerCase();
		} else if (string[i] === string[i].toLowerCase()){
			 split[i] = string[i].toUpperCase();
		}	
	}
	return split.join('');
}
console.log(swapCase('STrings'));


//3
var letterCount = function(string){
	//split string by words
	var split = string.split(' ');
	//check for duplicate letters in each word
	console.log(split)
	var single = split.split('');
	for(var i = 0; i < split.length; i++){
		
		
	}
	
	return split;
	//compare words that have duplicates
	//return word with most duplicates
	//if words have the same number return the first one
	//return -1 in no duplicates
}
console.log(letterCount("some string of random words"))



function hasRepeatedLetters(str) {
    var patt = /^([a-z])\1+$/;
    var result = patt.test(str);
    return result;
}





















