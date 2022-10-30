import "./App.css";

export default function App() {
  var jfile = require("./app.json");
  //set data object
  var jobj = JSON.stringify(jfile);
  localStorage.setItem("data", jobj);

  //get data object
  var getData = localStorage.getItem("data");
  var data = JSON.parse(getData);
  var cardsNum = getData.length;

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
    if (i1 == cardsNum - 1) {
        alert ("eij");
        //document.getElementById("cardDone").style.visibility = "visible";
        //document.getElementsByClassName("a").style.visibility = "hidden";

    }
    flipCard();
    i1 += 2;
    document.getElementById("front").innerHTML = JSON.stringify(
      data.Cards[i1].Word
    );
  }

  function goCards() {
    
    document.getElementById("home").style.visibility = "hidden";
    document.getElementById("a").style.visibility = "visible";

    document.getElementById("front").innerHTML = JSON.stringify(
      data.Cards[0].Word
    );
  }

  window.onload = function () {
    document.getElementById("a").style.visibility = "hidden";
    document.getElementById("cardDone").style.visibility = "hidden";
    alert(cardsNum);
  };

  //JSON.stringify(data.Cards[0].card1[0].Word)

  /*
    function getCard() {
        for (var i1 = 0; i1 <div 0; i1++) {
        data.cards[card1[JSON.stringify(data).substring(6,7)].Word];
    }
    
    */

  return (
    <div>
        <div id="home" class="home">
            <div id="deckTitle">Decks</div>
            <button onClick={goCards} class="sDeck">
            Spanish
            </button>
        </div>

        <div id="a" class="scene scene--card">
        <div class="card ">
          <div class="card__face card__face--front">
            <div id="front"></div>
            <button onClick={onFlip} id="showAnswer" class="showAnswer">
              Show Answer
            </button>
          </div>

          <div class="card__face card__face--back">
            <div id="back"></div>
            <div class="buttons">
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
