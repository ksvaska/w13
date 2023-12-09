
const birthday = document.querySelector('#birthday');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

function a(){
let day = new Date(birthday.value);
let now = new Date();
let diff = Math.floor((day - now)/(1000*60*60*24));

console.log(diff);


let x= 0; //стандартизированное число, чтобы легче было считать
if(diff<100){
    x = diff;
} else if(diff>=100 && diff<200){
   x= er-100;
} else if (diff >= 200 && diff< 300) {
  x = diff - 200;
  } else {
    x = diff- 300;
  }
console.log(x);
 y = x % 10; //остаток деления для определния окончания 
 console.log(y);

if(y===1 && x !==11){
    result.textContent = `До дня рождения ${diff} день.`;
  } else if((y===2 && y===3 && y===4) && (x !==12 &&
  x !== 13 &&
  x !== 14)){
   result.textContent = `До дня рождения ${diff} дня.`;
  } else {
    result.textContent = `До дня рождения ${diff} дней.`;
  }
}

  button.addEventListener('click',a);
