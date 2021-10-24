//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.
//Общие требования:
//Имена классов, свойств и методов должны быть информативными;
//Соблюдать best practices;
//Использовать синтаксис ES6.

class  Subject {
  constructor(model, power, weight){
  this.model = model;
  this.power = power;
  this.weight = weight;
  }
  powerOn() {
    console.log(`${this.model} включена,  мощность = ${this.power} Вт`);
  }
  powerOff() {
    console.log(`${this.model} выключена`);
  }
}

class Mixer extends Subject {
  constructor(model, brand, color, price, power) {
  super(model, power);
  this.model = model;  
  this.brand = brand;
  this.color = color;
  this.price = price;
  }
  priceInfo(){
    console.log(`${this.model} ${this.brand} цвет ${this.color} стоит ${this.price}`);
  }
};

class Toaster extends Subject {
  constructor (model, brand, color, price, power) {
  super(model, power);
  this.model = model;
  this.brand = brand;
  this.color = color;
  this.price = price;
  }
  priceInfo(){
    console.log(`${this.model} ${this.brand} цвет ${this.color} стоит ${this.price}`);
  }
};

let item1 = new Mixer('model1', 'vitek', 'white', 2000, 900);
let item2 = new Toaster('src-1000', 'gorenje', 'red', 2500, 1200);

item1.powerOn();
item1.powerOff();
item2.powerOn();
item2.powerOff();
item1.priceInfo();
item2.priceInfo();
