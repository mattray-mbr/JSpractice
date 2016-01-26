
//1
var getName = function(object){
	return object.name
}
console.log(getName({name: 'luisa', age:25}))

//2
var totalLetters = function(array){
	var total = array.join('');
	return total.length
}
console.log(totalLetters(['javascript', 'is', 'awesome']))

//3
var keyValue = function(a, b){
	return {[a]:b}
}
console.log(keyValue('city', 'denver'));

//4
var negativeIndex = function(array, num){
	var index = array.length + num
	if( index >= 0){
		return array[index]
	} else if(index <0) {
		num = (-num)%array.length
		index = array.length -num
		return array[index]
	}
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally', 'jeff'], -11))

//5
var removeM = function(string){
	string = string.toLowerCase()
	var split = string.split('')
	for(var i=0; i<split.length;i++){
		if(split[i] === 'm'){
			split.splice(i, 1)
		}
	}
	return split.join('')
}
console.log(removeM('family'))
console.log(removeM('memory'))

//6
var printObject = function(object){
	var result = "";
	for(var val in object){
		result += val + " is " +object[val]+'\n'
	}
	return result
}
console.log(printObject({a:10, b:20, c:30}))
console.log(printObject({firstName: 'pork', lastName: 'chops'}))

//7
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

//8
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

//9
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

//10
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




















