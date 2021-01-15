const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// instantiation of a Timer class
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('timer started');
  },
  onTick() {
    console.log('tick');
  },
  onComplete() {
    console.log('timer complete');
  },
});
