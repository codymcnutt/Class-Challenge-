// var Iguana = function(name, color, bulgyEyes, weight, tubbiness){
// 	this.name = name; 
// 	this.color = color;
// 	this.bulgyEyes = bulgyEyes;
// 	this.tubbiness = tubbiness; 
// 	this.eat = function(){
// 		console.log(this.name + " is eating. Om nom nom...")
// 		}

// }

// var ChubChub = new Iguana ("ChubChub", "Aquamarine", true, true)
// // console.log(myIguana);
// var Herbert = new Iguana("Herbert", "brown", false, true)
// // var myArray= [1,2,3,]
// // myArray.join()

// // create quote class and constructor function 
// // 2 properties on objects - text - author 
// var Quote = function(text, author){
// 	this.text = text; 
// 	this.author = author;
	
// 	this.quote = function(){
// 		console.log(this.text + " is by " + this.author)

// }
// }

// var Famous = new Quote ("It never rains but it pours.", " By Susan Wimbalton")

// var Crummy = new Quote ("There is no rest for the wicked.", "By Willy Wonka")


// var Iguana = function(name, color, bulgyEyes, weight, tubbiness){
// 	this.name = name; 
// 	this.color = color;
// 	this.bulgyEyes = bulgyEyes;
// 	this.tubbiness = tubbiness; 
// 	// this.eat = function(){
// 	// 	console.log(this.name + " is eating. Om nom nom...")
// 		}
// 		Iguana.count = Iguan.count || 0
// 		Iguana.count++
// 	Iguana.howMany = function(){
// 		console.log(this.count)
// 	}
// }

// var ChubChub = new Iguana ("ChubChub", "Aquamarine", true, true)
// var Herbert = new Iguana("Herbert", "brown", false, true)

// Iguana.prototype.eat = function () {
// 	console.log(this.name + "is eating. Yummy")
// }


var Quote = function(text, author){
	this.text = text; 
	this.author = author;
	
	Quote.count = Quote.count || 0
		Quote.count++
	Quote.howMany = function(){
		console.log(this.count)
	}
}

var Famous = new Quote ("It never rains but it pours.", " By Susan Wimbalton")

var Crummy = new Quote ("There is no rest for the wicked.", "By Willy Wonka")

Quote.prototype.countWords = function() {
	console.log(this.text.split("").length)

	Quote.prototype.yell = function(){
		console.log(this.text.toUpperCase() + "!!!!!!!!")
	} 
}
