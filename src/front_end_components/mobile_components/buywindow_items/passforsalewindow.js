import React from "react";
import PassForSale from "./passforsale.js";
import { Row, Col } from "antd";

class PassForSaleWindow extends React.Component {
  constructor(props) {
    super(props);
    this.passes = props.passes;
    this.control = props.control;
  }

  convertClassToInt(classification) {
    if (classification === "U1") {
      return 1;
    } else if (classification === "U2") {
      return 2;
    } else if (classification === "U3") {
      return 3;
    } else if (classification === "U4") {
      return 4;
    }
  }

  isValidPass(pass) {
    let price = this.control.price;
    let game = this.control.game;
    let classification = this.control.class;

    if (price != null) {
      // does the pass have a valid price?
      if (price < pass.price) {
        return false;
      }
    }

    if (game != null) {
      // is the pass for the right game?
      if (game !== pass.game) {
        return false;
      }
    }

    if (classification != null) {
      // does the pass have the right classification?
      if (
        this.convertClassToInt(classification) >
        this.convertClassToInt(pass.class)
      ) {
        return false;
      }
    }

    return true;
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={9}>
            <Row margin="5%">
            <h4 className="pass-for-sale-titles">Student</h4>
            </Row>
            <Row margin="5%">
            <h4 className="pass-for-sale-titles">Price</h4>
            </Row>
          </Col>
          <Col span={9}>
            <Row margin="5%">
            <h4 className="pass-for-sale-titles">Classification</h4>
            </Row>
            <Row margin="5%">
            <h4 className="pass-for-sale-titles">Game</h4>
            </Row>
          </Col>
        </Row>
        {this.passes.map((pass, index) => {
          if (this.isValidPass(pass)) {
            return (
              <PassForSale
                key={index}
                seller_name={pass.seller_name}
                price={pass.price}
                class={pass.class}
                game={pass.game}
                id={pass.id}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default PassForSaleWindow;
