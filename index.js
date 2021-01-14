class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // native javascript setters and getters
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  // Timer Methods
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      const timeRemaining = this.timeRemaining;
      this.timeRemaining = timeRemaining - 1;
      // with the native js getter and setter, these two lines can be
      // condensed like so:
      // this.timeRemaining = this.timeRemaining - 1;
    }
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// instantiation of a Timer class
const timer = new Timer(durationInput, startButton, pauseButton);
