const currentHour = 24;
let message = "";

if (currentHour >= 22) {
  console.log ("Não deveríamos comer nada, é hora de dormir!");
}
  if else (currentHour =< 22) {
    console.log ("Rango da noite, vamos jantar :D");
  } if else (currentHour >=14 && currentHour < 18) {
    console.log ("Vamos fazer um bolo pro café da tarde?");
  }   if else (currentHour === 11 && currentHour <14) {
    console.log ("Hora do almoço!!!");
  }     else (currentHour === 4 && currentHour <11) {
    console.log ("Hmmm, cheiro de café recém passado!");
  }
console.log message