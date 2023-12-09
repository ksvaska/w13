
const birthday = document.querySelector('#birthday');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

function a(){
let day = new Date(birthday.value);
let now = new Date();
let er = Math.floor((day - now)/(1000*60*60*24));

console.log(er);


let x= 0;
if(er<100){
    x = er;
} else if(er>=100 && er<200){
   x= er-100;
} else if (er >= 200 && er< 300) {
  x = er - 200;
  } else {
    x = er- 300;
  }
console.log(x);
 y = x % 10;
 console.log(y);

if(y===1 && x !==11){
    result.textContent = `До дня рождения ${er} день.`;
  } else if((y===2 && y===3 && y===4) && (x !==12 &&
  x !== 13 &&
  x !== 14)){
   result.textContent = `До дня рождения ${er} дня.`;
  } else {
    result.textContent = `До дня рождения ${er} дней.`;
  }
}

  button.addEventListener('click',a);
