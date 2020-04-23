import React, { Component } from "react";
import Stopwatch from "./stopwatch.js";
import Transpose from "./transpose.js";
import ParagraphCounter from './paragraphCounter.js'

class App extends Component {
  
  render() {
    return (<div>
          <ParagraphCounter />
    
          <Stopwatch />
          <Transpose />
          </div>
    );
  }
}
export default App;
