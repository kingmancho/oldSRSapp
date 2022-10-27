import "./App.css";

export default function App() {
  var jfile = require("./app.json");
  //set data object
  var jobj = JSON.stringify(jfile);
  localStorage.setItem("data", jobj);

  //get data object
  var getData = localStorage.getItem("data");
  var data = JSON.parse(getData);

  var i1 = 0;
  function flipCard() {
    var cardo = document.getElementsByClassName("card");
    [...cardo].forEach((card) => {
      card.classList.toggle("is-flipped");
    });
  }

  function onFlip() {
    flipCard();
    document.getElementById("back").innerHTML = JSON.stringify(
      data.Cards[i1 + 1].Tran
    );
  }

  function onResponse() {
    flipCard();
    i1 += 2;
    document.getElementById("front").innerHTML = JSON.stringify(
      data.Cards[i1].Word
    );
  }

  window.onload = function () {
    document.getElementById("a").style.visibility = "hidden"

    document.getElementById("front").innerHTML = JSON.stringify(
      data.Cards[0].Word
    );
 
  };

  //JSON.stringify(data.Cards[0].card1[0].Word)

  /*
    function getCard() {
        for (var i1 = 0; i1 < 0; i1++) {
        data.cards[card1[JSON.stringify(data).substring(6,7)].Word];
    }
    
    */

  return (
    <div id = "home" class = "home">
      <div id = "deckTitle">Decks</div>
      <button class = "sDeck">Spanish</button>
      <div id = "a" class="scene scene--card">
        <div class="card a">
          <div class="card__face card__face--front">
            <div id="front"></div>
            <button onClick={onFlip} id="showAnswer" class="showAnswer">
              Show Answer
            </button>
          </div>

          <div class="card__face card__face--back">
            <div id="back"></div>
            <div class="buttons a">
              <button onClick={onResponse} class="button">
                1
              </button>
              <div class="divider"></div>
              <button onClick={onResponse} class="button">
                2
              </button>
              <div class="divider"></div>
              <button onClick={onResponse} class="button">
                3
              </button>
              <div class="divider"></div>
              <button onClick={onResponse} class="button">
                4
              </button>
              <div class="divider"></div>
              <button onClick={onResponse} class="button">
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
