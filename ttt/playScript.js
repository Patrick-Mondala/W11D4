const Game = require('./game.js')
const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)
  // Leaving in stuff from readings so I can reference here!

  input: process.stdin,
  output: process.stdout
});

const completionCallback = function () {
  console.log('You win!');
  reader.question("Would you like to play again? Select (y/n): ", function (ans) {
    if (ans === 'y') {
      console.log('Another game!');
      let game = new Game();
      game.run(reader, completionCallback)
    } else if (ans === 'n') {
      reader.close();
    } else {
      console.log('That is not a valid answer!');
    }
  })
}

let game = new Game();
game.run(reader, completionCallback);