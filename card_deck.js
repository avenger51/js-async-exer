const URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

let cardsArray = [];
let currentIndex = 0;
//use to get first card from the deck
async function getCard() {
    let cardArray = [];
    let getCardTest = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
    cardArray = getCardTest.data.cards[0].suit;
    
    console.log(cardArray);
}



const URL2 = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
async function getCards() {
await axios.get(URL2)
.then(function (response) {
  cardsArray = response.data.cards;
  console.log("hopefully all cards have been pulled")
  console.log(cardsArray);
  })
.catch(function (error) {
   
    console.log(error);
  });
  
}


document.addEventListener('DOMContentLoaded', function() {

document.getElementById('next-card-button').addEventListener('click', function(){
    if(currentIndex < cardsArray.length) {
        const card = cardsArray[currentIndex];
        const cardElement = document.createElement('img');
        cardElement.src = card.image;
        const container = document.getElementById('card-output');
        container.appendChild(cardElement);
        currentIndex++;
   
 } else {
            console.log("not working");
        }
      
    });

getCards();

//not using
////get a deck id
//async function getDeck() {
//    let response = await axios.get(`${cardsURL}`);
//    let response1 = response.data.deck_id;
//    console.log(response1)
//
//}
//

//    
//}






