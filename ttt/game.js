let Board = require('./board');

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.currentMark = "X";
  }

  switchMark() {
    this.currentMark = this.currentMark === "X" ? "O" : "X";
  }

  run(reader, completionCallback) {
    if (this.board.won() || this.board.over()) {
      console.log(`${this.board.winner()} is victorious!`);
      completionCallback();
    } else {
      this.board.print();
      reader.question("Where would you like to place your piece? (position separated by space like '2 2' ", (input) => {
        let pos = input.split(" ").map(x => parseInt(x));
        if (this.board.empty(pos)) {
          this.board.placeMark(pos, this.currentMark);
          this.switchMark();
        } else {
          console.log("That position isn't empty!");
        }
        this.run(reader, completionCallback);
      })
    }
  }

}

module.exports = Game;
