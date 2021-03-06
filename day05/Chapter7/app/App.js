import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';
import Perf from 'react-addons-perf';

class App extends Component {
  constructor(){
    super(...arguments);
    this.state = this.getTime();
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState(this.getTime());
    },10);
  }

  getTime(){
    let now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      tenths: parseInt(now.getMilliseconds()/10),
    };
  }

  render(){
    let clocks=[];
    // for (var i = 0; i < 200; i++) {
      clocks.push(<Clock hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} tenths={this.state.tenths} />)
    // }

    return (
      <div>
        {clocks}
      </div>
    );
  }
}

Perf.start()
render(<App />, document.getElementById("root"));
// setTimeout(()=>{
  Perf.stop();
  console.warn("printWasted");
  Perf.printWasted();
  console.warn("printInclusive");
  Perf.printInclusive();
  console.warn("printExclusive");
  Perf.printExclusive();
  console.warn("printDOM");
  Perf.printDOM();
  console.log(" * getLastMeasurements", Perf.getLastMeasurements());
// },1500);