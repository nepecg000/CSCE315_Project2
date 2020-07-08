import React from "react";
import PassForSale from "./passforsale.js";
import { Row, Col } from "antd";

class PassForSaleWindow extends React.Component {
  constructor(props) {
    super(props);
    this.passes = props.passes;
    this.control = props.control;
    this.user = props.user;
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

    if((pass.id == null)||(pass.id == undefined)){
      return false;
    }

    return true;
  }



  render() {
    let valid_passes = [];
    if(this.passes != null){
      this.passes.map((pass, index) => {
          if (this.isValidPass(pass)) {
          valid_passes.push(pass);
        }
      });
    }
    let empty_pass_text = "";
    if(valid_passes.length === 0){
      empty_pass_text = "No passes available, please try again with a different query";
    }
    valid_passes.sort((a, b) => (a.handicap < b.handicap) ? 1 : (a.handicap === b.handicap) ? ((a.price > b.price) ? 1 : -1) : -1 )
    //console.log("len = ",valid_passes.length);
    //console.log("valid_passas = ",valid_passes);


  //console.log("valid passes: ",valid_passes);
    return (
      <div>
        <Row>
          <Col span={5}>
            <h4 className="pass-for-sale-titles">Student</h4>
          </Col>
          <Col span={3}>
            <h4 className="pass-for-sale-titles">Price</h4>
          </Col>
          <Col span={5}>
            <h4 className="pass-for-sale-titles">Classification</h4>
          </Col>
          <Col span={5}>
            <h4 className="pass-for-sale-titles">Game</h4>
          </Col>

        </Row>
        {valid_passes.map((pass, index) => {
            return (
              <PassForSale
                key={index}
                user = {this.user}
                pass={pass}
              />
            );
          }
        )}
        <h3 className="no-pass-available-text">{empty_pass_text}</h3>
      </div>
    );
  }
}

export default PassForSaleWindow;
