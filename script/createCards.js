const createCards = () => {
  //　カードの配置データ
  const cardData = {
    1: [
      {
        x: 50,
        y: 80
      }
    ],
    2: [
      {
        x: 50,
        y: 25
      },
      {
        x: 50,
        y: 125,
        rotate: 180
      }
    ],
    3: [
      {
        x: 50,
        y: 25
      },
      {
        x: 50,
        y: 80
      },
      {
        x: 50,
        y: 125,
        rotate: 180
      }
    ],
    4: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      }
    ],
    5: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 50,
        y: 75
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      }
    ],
    6: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 27.5,
        y: 75
      },
      {
        x: 72.5,
        y: 75
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      }
    ],
    7: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 50,
        y: 50
      },
      {
        x: 27.5,
        y: 75
      },
      {
        x: 72.5,
        y: 75
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      }
    ],
    8: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 50,
        y: 50
      },
      {
        x: 27.5,
        y: 75
      },
      {
        x: 72.5,
        y: 75
      },
      {
        x: 50,
        y: 100,
        rotate: 180
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      }
    ],
    9: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 27.5,
        y: 60
      },
      {
        x: 72.5,
        y: 60
      },
      {
        x: 27.5,
        y: 90,
        rotate: 180
      },
      {
        x: 72.5,
        y: 90,
        rotate: 180
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      },
      {
        x: 50,
        y: 75
      }
    ],
    10: [
      {
        x: 27.5,
        y: 25
      },
      {
        x: 72.5,
        y: 25
      },
      {
        x: 27.5,
        y: 60
      },
      {
        x: 72.5,
        y: 60
      },
      {
        x: 27.5,
        y: 90,
        rotate: 180
      },
      {
        x: 72.5,
        y: 90,
        rotate: 180
      },
      {
        x: 27.5,
        y: 125,
        rotate: 180
      },
      {
        x: 72.5,
        y: 125,
        rotate: 180
      },
      {
        x: 50,
        y: 45
      },
      {
        x: 50,
        y: 105,
        rotate: 180
      }
    ],
  }
  // カードの配置先
  const cardsWindow = document.getElementById('cards');
  // カードの色とマーク
  const cardsColorAndSuit = [
    { color: 'black', suit: '♠' },
    { color: 'black', suit: '♣' },
    { color: 'red', suit: '♥' },
    { color: 'red', suit: '♦' },
  ];
  // カードの配列
  let result = [];

  // マークと数字を組み合わせてカードを作成
  for (let suit of cardsColorAndSuit) {
    for (let value = 1; value <= 13; value++) {
      // キャンバスを作成
      const card = document.createElement('div');
      const cardBackFace = document.createElement('div');
      cardBackFace.className = 'cardBackFace';
      card.appendChild(cardBackFace);

      const canvas = document.createElement('canvas');
      // クリックした時の処理を追加
      card.onclick = () => clickCard(suit.suit, value, card);

      // キャンバスのコンテキストを取得
      const ctx = canvas.getContext('2d');
      // キャンバスのサイズを設定
      canvas.width = 100;
      canvas.height = 150;

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 100, 150);

      // カードの色を設定
      ctx.fillStyle = suit.color;
      ctx.font = 'bold 18px MS Pゴシック';
      // カードの数字を描画
      ctx.fillText(value, 0, 15);
      ctx.translate(100, 150);
      ctx.rotate(180 * Math.PI / 180);
      ctx.fillText(value, 0, 15);
    
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 11以上の場合はJ,Q,Kを描画
      if(value >= 11) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.font = '164px MS Pゴシック';
        ctx.fillText(suit.suit, 50, 75);

        ctx.fillStyle = 'white';
        ctx.font = '72px MS Pゴシック';
        let word = '';
        if(value === 11) word = 'J';
        if(value === 12) word = 'Q';
        if(value === 13) word = 'K';
        ctx.fillText(word, 50, 75);
        ctx.strokeText(word, 50, 75);

        card.appendChild(canvas);
        result.push(card);

        continue;
      }

      ctx.font = '42px MS Pゴシック';
      // カードのマークを描画
      for (let mark of cardData[value]) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.translate(mark.x, mark.y);
        if (mark.rotate) {
          ctx.rotate(mark.rotate * Math.PI / 180);
        }
        ctx.fillText(suit.suit, 0, 0);
      }
      card.appendChild(canvas);
      result.push(card);
    }
  }

  for(let card of shuffle(result)) {
    cardsWindow.appendChild(card);
  }
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}