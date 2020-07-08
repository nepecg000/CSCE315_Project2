import React from "react";
import "antd/dist/antd.css";
import PassForSaleWindow from "./buywindow_items/passforsalewindow.js";
import GameInfoWindow from "./buywindow_items/gameinfowindow.js";
import WrappedQueryWindow from "./buywindow_items/querywindow.js";
import qController from "./buywindow_items/querycontroller.js";
import { Row, Col } from "antd";

class BuyWindow extends React.Component {
  constructor(props) {
    super(props);
    this.passes = props.passes;
    this.games = new Set();
    for (let i = 0; i < this.passes.length; i++) {
      // Add all available games to the games set
      this.games.add(this.passes[i].game);
    }
    //console.log(this.games);
  }

  render() {
    return (
      <div>
        <Row>
            <GameInfoWindow control={qController} />
        </Row>
        <Row>
            <WrappedQueryWindow control={qController} games={this.games} />
        </Row>
        <Row>
          <Col span={24}>
            <PassForSaleWindow control={qController} passes={this.passes} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BuyWindow;
