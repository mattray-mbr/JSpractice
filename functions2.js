
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
	var object = {
		
	}
	return object
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




























