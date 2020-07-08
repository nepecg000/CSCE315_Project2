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
    this.user = props.user;
    this.games = new Set();
    if(this.passes != null){
      for (let i = 0; i < this.passes.length; i++) {
        // Add all available games to the games set
        this.games.add(this.passes[i].game);
      }
    }
    
    //console.log(this.games);
    //console.log("in buywindow constructor");
  }

  render() {
    //console.log("in buywindow render");
    return (
      <div>
        <Row>
          <Col span={12}>
            <GameInfoWindow control={qController} user={this.user}/>
          </Col>
          <Col span={12}>
            <WrappedQueryWindow control={qController} games={this.games} user={this.user}/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <PassForSaleWindow control={qController} passes={this.passes} user = {this.user}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BuyWindow;
