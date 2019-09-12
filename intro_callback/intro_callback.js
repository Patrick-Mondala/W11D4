// Clock

class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    window.setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) { this.minutes +=1; this.seconds = 0; }
    if (this.minutes === 60) { this.hours += 1; this.minutes = 0; }
    if (this.hours === 24) { this.hours = 0; }
    this.printTime();
  }
  
}

// Addnumbers
/*
const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Give a number.", function(n) {
      let num = parseInt(n);
      sum += num;
      console.log(`Sum is ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    })
  } else {
    completionCallback(sum);
    reader.close();
  }
}

//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} greater than ${el2}? `, function(answer) {
        if (answer === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                madeAnySwaps = true;
                innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
            } else {
                innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
            }
        });
    } else {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
      if (madeAnySwaps) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
      } else {
        sortCompletionCallback(arr);
      }
    }

    outerBubbleSortLoop(true);
}
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

*/

// myBind

Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context)
  };
};


// myThrottle and myDebounce

Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  return () => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => {
        tooSoon = false;
      }, interval)
      this(...arguments);
    }
  }
};

Function.prototype.myDebounce = function (interval) {
    let tooSoon = false;
    let timeOut;
    return () => {
        if (!tooSoon) {
            tooSoon = true;
            timeOut = setTimeout(() => {
                tooSoon = false;
                this(...arguments);
            }, interval);
        } else {
            clearTimeout(timeOut);
            timeOut = setTimeout(() => {
                tooSoon = false;
                this(...arguments);
            }, interval);
        }
    }
};