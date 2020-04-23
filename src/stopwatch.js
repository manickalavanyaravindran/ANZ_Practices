import React from "react";

class Stopwatch extends React.Component {
  state = {
  timerStart: 0,
  timerTime: 0
};
  startTimer = () => {
  this.setState({
    timerTime: this.state.timerTime,
    timerStart: Date.now() - this.state.timerTime
  });
  this.timer = setInterval(() => {
    this.setState({
      timerTime: Date.now() - this.state.timerStart
    });
  }, 1000);
};
 stopTimer = () => {
  clearInterval(this.timer);
};
  render() {
    const { timerTime } = this.state;
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div>
        <h2>{hours} : {minutes} : {seconds}</h2>
        
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    );
  }


}
export default Stopwatch;