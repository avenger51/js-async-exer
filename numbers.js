const URL = "http://numbersapi.com/";

//class for numbers
class Numberinfo {
    constructor(num) {
      this.num = num;
      //this.text = text;
      //this.date = date;
    }

async getText(){
    let response = await axios.get(`${URL}${this.num}/math?json`);
    console.log(response.data.text);
}
}
//Object create
//let factClassTest = new Numberinfo(13);
//factClassTest.getText()


//Display multiple number facts in index.html
async function getNums() {
    let responses = await Promise.all([
        axios.get(`${URL}13/math?json`),
        axios.get(`${URL}42/math?json`),
        axios.get(`${URL}7/math?json`)
    ]);
    let factList = document.getElementById("newListLi");
    responses.forEach(response => {
        let newText = document.createElement("li")
        newText.textContent = response.data.text;
        factList.appendChild(newText);
    });
    }
    //console.log(response[0].data.text);
    //console.log(response[1].data.text);
    //console.log(response[2].data.text);


//This will display a single fact for a specific number in index.html
async function addStuff(URL) {
    let response1 = await axios.get(`${URL}42/math?json`);
    let data = response1.data.text
    let textNode = document.createTextNode(data);
    let pElement = document.createElement('p');
    pElement.appendChild(textNode);
    document.body.appendChild(pElement);
}

//this adds 4 of the same text to the page
async function addNumTest() {
let numberInfo = document.getElementById("newListLi");
let response = await $.getJSON("http://numbersapi.com/42/math?json")
let valueToAdd = response.text;
    for (let i =0; i < 4; i++) {
    let newListLi = document.createElement("li")
    newListLi.textContent= valueToAdd;
    numberInfo.appendChild(newListLi);
}
}
//This will display multiple number facts in index.html
async function getNumText(number, num) {
    let URL = "http://numbersapi.com/";
    
    let numberInfo = document.getElementById("newListLi");

        for (let i =0; i < num; i++) {
        let responses = await axios.get(`${URL}${number}/math?json`)
        let newListLi = document.createElement("li")
        newListLi.textContent = responses.data.text;
        numberInfo.appendChild(newListLi);
        }
    }
    
//This will create different number facts but behaves oddly...
async function getNumText2(number, num) {
    let URL = "http://numbersapi.com/";
    let factsArray = [];
    let numberInfo = document.getElementById("newListLi");

        for (let i =0; i < num; i++) {
        let responses = await axios.get(`${URL}${number}/math?json`);
        factsArray.push(responses);

        let newListLi = document.createElement("li");
        newListLi.textContent = responses.data.text;
        numberInfo.appendChild(newListLi);
        }
        return factsArray;
    }
    

//Not working
  async function getNums2(num) {
    let responses = await Promise.all([
       (`${URL}${num}/math?json`),
      ]);
    let factList = document.getElementById("newListLi");
    responses.forEach(response => {
        let newText = document.createElement("li")
        newText.textContent = response.text;
        factList.appendChild(newText);
    })
    }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//woops max call stack:
//async function getApiData(URL, num) {
//    if(num === 0){
//    const response = await axios.get(URL);
//    const data = response.data.text;
//    console.log(data);
//}
//await getApiData(URL, num - 1);
//}


//SUCESS

  
        
   