let cards = ['♦', '♥', '♠ ', ' ♣'];
let numbers = ['5', 'J', 'K', '3', '8', 'A', '10', '2', '7', '9', '4'];

function displayCard() {
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
   
    document.getElementById("pinta-arriba").style.background ='#accff';
    document.getElementById("numeros").style.background ='#accff';
    document.getElementById("pinta-abajo").style.background ='#accff';

    document.getElementById("pinta-arriba").innerHTML = singleCard;
    document.getElementById("numeros").innerHTML = singleNumber;
    document.getElementById("pinta-abajo").innerHTML = singleCard;
}







