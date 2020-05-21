import * as React from "react";
import { Stage, Text } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";
import Background from "./Background";

const width = 600;
const height = 400;
const options = {
  backgroundColor: 0xa678ca,
  resolution: window.devicePixelRatio,
  width: width,
  height: height
};
const style = {
  width: width,
  height: height
};

class App extends React.Component {
  render() {
    return (
      <Stage options={options} style={style}>
        <Background />
        <Text x={100} y={100} text="Hello world!" />
        <RotatingBunny position="50,50" />
      </Stage>
    );
  }
}

export default App;
