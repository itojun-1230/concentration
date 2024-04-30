let cardsNum = 0;
let turnPlayer = 0;
let player = 0;
let playersData = [];

const startGame = () => {
  player = document.getElementById("howManyPlayers").value;
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";

  for (let i = 0; i < player; i++) {
    const playerElem = document.createElement("label");
    playerElem.innerHTML = `プレイヤー ${i + 1} score: 0`;
    document.querySelector("footer").appendChild(playerElem);

    playersData.push({
      element: playerElem,
      clickNum: undefined,
      clickElem: undefined,
      score: 0,
    });
  }

  document.querySelector("header h1").innerHTML = `プレイヤー ${turnPlayer + 1} の番です`;
}
const clickCard = async(suit, number, elem) => {
  let alertText = "";

  elem.className = 'clicked';
  await sleep(500);

  if(playersData[turnPlayer].clickNum === undefined) {
    playersData[turnPlayer].clickNum = number;
    playersData[turnPlayer].clickElem = elem;

    alertText = `${suit}${number}を選択しました。もう一枚選んでください。`;
  }else {
    if(playersData[turnPlayer].clickNum === number) {
      playersData[turnPlayer].score += 2;
      playersData[turnPlayer].element.innerHTML = `プレイヤー ${turnPlayer + 1} score: ${playersData[turnPlayer].score}`;

      elem.className = "done";
      playersData[turnPlayer].clickElem.className = "done";

      playersData[turnPlayer].clickNum = undefined;
      playersData[turnPlayer].clickElem = undefined;

      alertText = "正解です！\nもう一度選んでください。";

      cardsNum -= 2;
      if(cardsNum === 0) {
        endGame();
      }
    }else {
      elem.className = "";
      playersData[turnPlayer].clickElem.className = "";
      alertText = "不正解です！\n次のプレイヤーの番です。";

      
      playersData[turnPlayer].clickNum = undefined;
      playersData[turnPlayer].clickElem = undefined;
      turnPlayer = turnPlayer + 1 >= player ? 0 : turnPlayer + 1;
    }
    document.querySelector("header h1").innerHTML = `プレイヤー ${turnPlayer + 1} の番です`;
  }
  //alert(alertText)
}

const endGame = () => {
  const winner = playersData.reduce((acc, cur) => acc.score > cur.score ? acc : cur);
  alert(`プレイヤー${playersData.indexOf(winner) + 1}の勝利です！`);
  location.reload();
}

window.onload = () => {
  createCards();
  cardsNum = document.querySelectorAll("canvas").length;
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));