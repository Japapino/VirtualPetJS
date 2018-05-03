"use strict"
class VirtualPet{
	constructor(){
	this.type = 'animal' 
	this.hunger = 0
	this.health = 100
	}
}

class Dog extends VirtualPet{
	constructor(name, type){
		this.type = 'dog'
		this.name = name
	}

	get type(){
		return type
	}

	get hunger(){
		return hunger
	}

	get health(){
		return health
	}

	speak() {
		console.log(this.name + " woofs")
	}
}

var first = new Dog('Mack')
first.speak(); 