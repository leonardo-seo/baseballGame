class Baseball {

  constructor() {
    this.randomArray = [];
    this.strike = 0;
    this.ball = 0;
    this.input_num = 0;
  }

  getRandom() {
    // 3자리 숫자를 랜덤으로 생성하기
    this.random(this.randomArray);
  }

  init() {
    this.strike = 0;
    this.ball = 0;
  }

  getInput() {
    //  유저로 부터 input_num으로 숫자3자리 입력받기
    const input_num = prompt('숫자 세자리를 입력하세요. (0 입력시 종료됩니다.)');
    this.input_num = input_num;
  }

  random (arr) {
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * 9) + 1;
      if (arr.includes(num)) {
        num = Math.floor(Math.random() * 9) + 1;
        i--;
      } else {
        arr.push(num);
      }
    }
    console.log(arr);
  }
  
  check (strike, ball, input_num) {
    if (strike == 0 && ball != 0) {
      console.log(input_num + ') ' + '0스트라이크 ' + ball + '볼');
    } else if(strike != 0 && ball == 0) {
      console.log(input_num + ') ' + strike + '스트라이크' + ' 0볼');
    } else if(strike == 0 && ball == 0) {
      console.log(input_num + ') ' + '4볼');
    } else {
      console.log(input_num + ') ' + strike + '스트라이크 ' + ball + '볼');
    }
  };

  judgement() {
    // 스트라이크 & 볼 카운트 하기
    for (let i = 0; i < 3; i++) {
      if (this.input_num[i] == this.randomArray[i]) {
        this.strike++;
      }
      for (let j = 0; j < 3; j++) {
        if ((i != j) && (this.input_num[i] == this.randomArray[j])) {
          this.ball++;
        }
      }
    }
  }

  play() {
    this.getRandom();
    while (true) {
      this.getInput();
      if (this.input_num === '0') break;
      this.init();
      this.judgement();
        
      // 3개의 숫자를 모두 맞힌경우 게임 종료
      if (this.strike === 3) {
        console.log(this.input_num + ") 3 스트라이크. 3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      } else {
        this.check(this.strike, this.ball, this.input_num);
      };
    };
  };
}

const game = new Baseball();
game.play();
