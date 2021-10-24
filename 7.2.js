//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. 

const object = {
    a:'А',
    b:'Б',
    c:'С',
    d:'Д'
  }  
  function checkPropInObj (str, obj) {
  return (str in obj);
}
  
  console.log(checkPropInObj(2, object));
  
