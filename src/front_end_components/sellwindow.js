import React from "react";
import "antd/dist/antd.css";
import SellWindowTitle from "./sellwindow_items/sellwindowtitle.js";
import WrappedQueryWindow from "./sellwindow_items/sellwindowform.js";

class SellWindow extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }

  render() {
    return (
      <div>
        <SellWindowTitle />
        <WrappedQueryWindow user={this.user}/>
      </div>
    );
  }
}

export default SellWindow;
