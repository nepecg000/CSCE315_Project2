import React from "react";

class PassForSaleTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return <div>{this.text}</div>;
  }
}

export default PassForSaleTextBox;
