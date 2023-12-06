const birthday = document.querySelector('#birthday');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

function a(){
let day = new Date(birthday.value);
let now = new Date();
let er = Math.floor((day - now)/(1000*60*60*24));
console.log(er);

}




//let numBirth = 0;
//if(birthday<100){
    numBirth = birthday;
//} else if(birthday>=100 && birthday<200){
  //  numBirth = birthday-100;
//} else if (birthday >= 200 && birthday < 300) {
  ///  numBirth = birthday - 200;
 // } else (birthday >= 300) 
 // {
 //   numBirth = birthday - 300;
 // }


 // if(numBirth ===1 && numBirth !==11){
    //result.textContent = `До дня рождения ${numBirth} день.`;
  //} else if((numBirth===2 && numBirth===3 && numBirth===4) && numBirth !==12 &&
  //numBirth !== 13 &&
  // !== 14){
  //  result.textContent = `До дня рождения ${numBirth} дня.`;
 // } else {
  //  result.textContent = `До дня рождения ${numBirth} дней.`;
  //}


  button.addEventListener('click',a);
