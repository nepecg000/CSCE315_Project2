import React from "react";

class GameInfoWindow extends React.Component {
  constructor(props) {
    super(props);
    this.control = props.control;
    //console.log(this.control);
  }

  render() {
    return (
      <div>
        <h1 align="center">This is the Game Info Panel!</h1>
        <div>Game:{this.control.game}</div>
        <div>Price: {this.control.price} </div>
        <div>Classification: {this.control.class}</div>
      </div>
    );
  }
}

export default GameInfoWindow;
