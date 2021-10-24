//Задание 4.
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
//План:
//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
//Создать экземпляры каждого прибора;
//Вывести в консоль и посмотреть результаты работы, гордиться собой :)

function Subject(model, power, weight){
  this.model = model;
  this.power = power;
  this.weight = weight;
  this.powerOn = function() {
    console.log(`${model} включена,  мощность = ${power} Вт`);
  }
  this.powerOff = function() {
    console.log(`${model} выключена`);
  }
}

const mixer = new Subject ('model1', 900);
const toaster = new Subject ("src-1000", 1200)

mixer.powerOn();
mixer.powerOff();
toaster.powerOn();
toaster.powerOff();

mixer.prototype =  new Subject();
toaster.prototype = new Subject();

function Mixer(model, brand, color, price) {
  this.model = model;
  this.brand = brand;
  this.color = color;
  this.price = function(){
    console.log(`${model} ${brand} ${color} стоит ${price}`);
  }
};

function Toaster(model, brand, color, price) {
  this.model = model;
  this.brand = brand;
  this.color = color;
  this.price = function(){
    console.log(`${model} ${brand} ${color} стоит ${price}`);
  }
};

const item1 = new Mixer('model1', 'vitek', 'white', 2000);
const item2 = new Toaster('src-1000', 'gorenje', 'red', 2500);

item1.price();
item2.price();
