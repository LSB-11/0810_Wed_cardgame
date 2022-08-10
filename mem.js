const cardArray = [
{
  name: "ssafy",
  img: "./img2/ssafy.png",
  id: null, 
  done: false,
},
{
  name: "ssafy",
  img: "./img2/ssafy.png",
  id: null, 
  done: false,
},
// =======================
{
  name: "samsung",
  img: "./img2/sam.png",
  id: null, 
  done: false,
},
{
  name: "samsung",
  img: "./img2/sam.png",
  id: null, 
  done: false,
},
// =======================
{
  name: "missingno",
  img: "./img2/missingno.png",
  id: null, 
  done: false,
},
{
  name: "missingno",
  img: "./img2/missingno.png",
  id: null, 
  done: false,
},
// =======================
{
  name: "LG",
  img: "./img2/LG.png",
  id: null, 
  done: false,
},
{
  name: "LG",
  img: "./img2/LG.png",
  id: null, 
  done: false,
},
// =======================
{
  name: "klee",
  img: "./img2/klee.png",
  id: null,
},
{
  name: "klee",
  img: "./img2/klee.png",
  id: null,
},
// =======================
{
  name: "ayaka",
  img: "./img2/ayaka.png",
  id: null,
},
{
  name: "ayaka",
  img: "./img2/ayaka.png",
  id: null,
},
];

const getGameDOM = () => {  // DOM을 가져오는 함수
  const rows = document.querySelectorAll(".container .row");
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
  }
};
const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";

  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";

  cardArray[8].id =  "2-0";
  cardArray[9].id =  "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};

let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;
const gameDOM = [];//3x4 배열이 될 예정

const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./img2/ayaka_fish.png");
      gameDOM[i][j].appendChild(card);
    }
  }
};
const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location;
  }
  else {
    clickSecond = location;
  }
};

const backFlip = () => {
  const parsedIDFirst = cardArray[clickFirst].id.split("-");
  const parsedIDSecond = cardArray[clickSecond].id.split("-");
  setTimeout( () => {
  gameDOM[parsedIDFirst[0]][parsedIDFirst[1]].querySelector("img").src = 
    "./img2/ayaka_fish.png";
  gameDOM[parsedIDSecond[0]][parsedIDSecond[1]].querySelector("img").src = 
    "./img2/ayaka_fish.png";

}, 500);
};

const isCorrect = () => {
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
  } 
  else {
    backFlip();
  }
}

const flip = (location) => {
  if (!cardArray[location].done) {
    setClickHistory(location);

    const parsedID = cardArray[location].id.split("-");
    gameDOM[[parsedID[0]]][parsedID[1]].querySelector("img").src = 
      cardArray[location].img;
    clickCount++;
    if(clickCount == 2) {
      clickCount = 0;
      isCorrect();
    }

    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }
};


getGameDOM();
cardArray.sort(() => 0.5 - Math.random());
setIDtoCardArray();
createBoard();