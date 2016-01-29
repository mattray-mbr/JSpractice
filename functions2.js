
// --------- exercise 1 ----------------------
//Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
var getName = function(obj){
	return obj.name
}
console.log(getName({name: 'luisa', age:25}))

//1.2
function getOtherName(obj){
	return obj.name
}
console.log(getOtherName({name: 'luisa', age:25}))

// --------- exercise 2 ----------------------
//Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
var randomArray = ['javascript', 'is', 'awesome']
var totalLetters = function(array){
	var total = array.join('');
	return total.length
}
console.log(totalLetters(randomArray))

// --------- exercise 3 ----------------------
//Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
var keyValue = function(a, b){
	return {[a]:b}
}
console.log(keyValue('city', 'denver'));

// --------- exercise 4 ----------------------
//Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
var negativeIndex = function(array, num){
	var index = array.length + num
	if( index >= 0){
		return array[index]
	} else if(index < 0) {
		num = (-num)%array.length
		index = array.length -num
		return array[index]
	}
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally', 'jeff'], -11))

// --------- exercise 5 ----------------------
//Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
var removeM = function(string){
	newString = string.toLowerCase()
	var split = newString.split('')
	for(var i=0; i<split.length;i++){
		if(split[i] === 'm'){
			split.splice(i, 1)
		}
	}
	return split.join('')
}
console.log(removeM('family'))
console.log(removeM('memory'))

//5.2
var randomString = 'random string of wOrds'
var removeO = function(string){
	string = string.toLowerCase()
	return _.chain(string)
	// .toLowerCase()
	.toArray()
	.reject(function(letter){return letter === 'o'})
	.join('')
	.value()
}
console.log(removeO(randomString))

// --------- exercise 6 ----------------------
//Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
var printObject = function(object){
	var result = "";
	for(var val in object){
		result += val + " is " +object[val]+'\n'
	}
	return result
}
console.log(printObject({a:10, b:20, c:30}))
console.log(printObject({firstName: 'pork', lastName: 'chops'}))


// --------- exercise 7 ----------------------
//Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
var vowels = function(string){
	string = string.toLowerCase();
	var split = string.split('');
	var vowelsArray = []
	for(var i=0; i<split.length;i++){
		if(split[i]==='a' || split[i]==='e' || split[i]==='i' || split[i]==='o' || split[i]==='u'){
			vowelsArray.push(split[i]);
		}
	}
	return vowelsArray
}
console.log(vowels('Alabama'));
console.log(vowels('What an evil odd dUck whO is big'))

//7.2
var otherVowels = function(str){
	return _.chain(str)
	.toArray()
	.filter(function(letter){return letter.match(/[aeiouAEIOU]/); })
	.value()
}
console.log(otherVowels('what an evil odd dUck'))

// --------- exercise 8 ----------------------
//Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
var twins = function(array){
	if(array.length%2 !== 0){
		return false
	}
	for(var i=0;i<array.length;i++){
		for(var n=1; n< array.length; n++){
			if(array[i] === array[n]){
				return true
			}
		}
	}
}
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'b', 'c']))
console.log(twins(['a', 'a', undefined]))

//8.2
console.log('8.2')
var otherTwins = function(array){


}
console.log(otherTwins(['a', 'a', 'b', 'b', 'c', 'c']))

// --------- exercise 9 ----------------------
//Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
console.log('9')
var or = function(array){
	for(var i=0;i<array.length;i++){
		if(array[i] === true){
			return true
		} 
	}
	return false
}
console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))

//9.2
console.log('9.2')
var otherOr = function(array){
	return _.contains(array, true)
}
console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))
// --------- exercise 10 ---------------------
//Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
var unique = function(array){
	var uniqueArray = []
	var extra = {}
	var i
	for(i=0; i<array.length;i++){
		extra[array[i]]=0;
	}
	for( i in extra){
		uniqueArray.push(i);
	}
	return uniqueArray
}
console.log(unique(['a', 'b', 'c', 'a', 'b', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))

//10.2
var otherUnique = function(array){
	return _.uniq(array)
}
console.log(otherUnique(['a', 'b', 'c', 'a', 'b', 'd']))



















