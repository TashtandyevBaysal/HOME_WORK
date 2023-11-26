//? По нажатию клавиш меняйте цвет заднего фон - body
//? R - red
//? G - green;
//? B - blue;
//? W - white;
//? SHIFT + B - black
//? SHIFT + G - gray;


let combo = []

document.addEventListener('keydown', (event)=>{
    console.log(event.key)
    if (event.key === 'r' || event.key === 'R') {
        document.body.style.backgroundColor = 'red'
    } else  if (event.key === 'g' || event.key === 'G') {
        document.body.style.backgroundColor = 'green'
    } else  if (event.key === 'b' || event.key === 'B') {
        document.body.style.backgroundColor = 'blue'
    } else  if (event.key === 'w' || event.key === 'w') {
        document.body.style.backgroundColor = 'white'
    } 

combo.push(event.key)

if (combo[combo.length -2] === 'Shift' && event.key === 'B') {
    document.body.style.backgroundColor = 'black'
} else if (combo[combo.length -2] === 'Shift' && event.key === 'G') {
    document.body.style.backgroundColor = 'gray'
}
})

//? Создайте переменную let i=0, по нажатию на кнопку выводите в консоль переменную i и увеличивайте её в 2 раза;

let i = 0 

const button = document.createElement('button')

document.body.append(button)

button.innerText = 'Click here'

button.addEventListener('click', () => {
    console.log(i *= 2)
})

//? Вставьте картинку и кнопку в html. При нажатии на кнопку скройте картинку путем затухания до прозрачного состояния.

const btn1 = document.createElement('button')
const btn2 = document.createElement('button')

document.body.append(btn1, btn2)

btn1.innerText = 'lol'
btn2.innerText = 'lol2'

const pic = document.getElementById('pictures')

btn1.addEventListener('click', () => {
    pic.style.opacity = 0 
    

})

btn2.addEventListener('click', () => {
    pic.style.opacity = 1
    

})

//? Создайте h1 с классом "output-text". Создайте input type="text" с классом "input-text". При каждом изменении ".input-text" меняйте содержимое ".output-text" на значение из ".input-text".

const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');

outputText.style = `
  font-size: 18px;
  color: blue;`


inputText.addEventListener('input',  () => {
  outputText.textContent = inputText.value;
});

//? Создайте div размером 500px * 500px, по нажатию на неё выводите в консоль позицию места куда вы нажали относительно div- а;

const myDiv = document.getElementById('myDiv');


myDiv.addEventListener('mousemove',  (event) => {
  const x = event.clientX - myDiv.getBoundingClientRect().left;
  const y = event.clientY - myDiv.getBoundingClientRect().top;

  console.log('Позиция относительно div-а: x = ' + x + ', y = ' + y);
});

//? Создайте input type color. При изменении инпута меняйте цвет заднего фона body на значение из этого инпута

const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', () => {
  document.body.style.backgroundColor = colorInput.value;
});