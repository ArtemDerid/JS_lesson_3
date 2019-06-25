var style = ['Джаз','Блюз'];
console.log(style);
style.push('Рок-н-Ролл');
console.log(style);
style.splice(-2, 1, 'Класика');
console.log(style);
console.log(style.splice(0, 1));
style.unshift('Реп', 'Реггі');
console.log(style);