// Задание
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().


const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = [];
planets.map(elm => planetsLengths.push(elm.length));