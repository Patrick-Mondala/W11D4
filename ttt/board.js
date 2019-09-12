class Board {
  constructor() {
    this.grid = Array.from({ length: 3 }, (value) => Array.from({ length: 3}))
  }

  rows() {
    return this.grid;
  }

  columns() {
    return this.grid[0].map((col, i) => this.grid.map(row => row[i]));
  }

  diagonals() {
    let grid = this.grid;
    let diag1 = [grid[0][0], grid[1][1], grid[2][2]];
    let diag2 = [grid[0][2], grid[1][1], grid[2][0]];

    return [diag1, diag2]
  }

  won() {
    let lines = this.rows().concat(this.columns().concat(this.diagonals()));
    return lines.some(function(line) {
      return line.every(function (ele) { return ele === 'X'; }) || line.every(function (ele) { return ele === 'O'; })
    });
  }

  tied() {
    let lines = this.rows().concat(this.columns().concat(this.diagonals()));
    return !(lines.some(function (line) {
      return line.some(function (ele) { return ele === undefined; })
    })) && !this.won();
  }

  over() {
    return this.won() || this.tied();
  }

  winner() {
    if (this.tied()) return "none";
    if (!this.won()) return null;
    let lines = this.rows().concat(this.columns().concat(this.diagonals()));
    let winningLine = lines.filter(function (line) {
      return line.every(function (ele) { return ele === 'X'; }) || line.every(function (ele) { return ele === 'O'; })
    });

    return winningLine[0][0];
  }

  empty(pos) {
    return this.grid[pos[0]][pos[1]] === undefined;
  }

  placeMark(pos, mark) {
      this.grid[pos[0]][pos[1]] = mark;
  }

  print() {
      console.log(this.grid);
  }
}

// let board = new Board();
// board.place_mark([0,0], "X");
// board.place_mark([1,1], "X");
// board.place_mark([2,2], "X");
// board.print();
// console.log(board.won());
// console.log(board.winner());

module.exports = Board;