import React from "react";
import { Row, Col } from "antd";
import PurchaseButton from "./purchasebutton.js";
import PassForSaleTextBox from "./passforsaletextbox.js";
import "./buywindow_styles.css";

class PassForSale extends React.Component {
  constructor(props) {
    super(props);
    //extract data needed for a pass for sale
    this.seller_name = props.seller_name;
    this.game = props.game;
    this.price = props.price;
    this.class = props.class;
    this.id = props.id;
  }

  render() {
    return (
      <div className="pass-for-sale">
        <Row>
          <Col span={9}>
            <Row margin="5%">
              <PassForSaleTextBox text={this.seller_name} />
            </Row>
            <Row margin="5%">
              <PassForSaleTextBox text={this.price} />
            </Row>
          </Col>
          <Col span={9}>
            <Row margin="5%">
              <PassForSaleTextBox text={this.class} />
            </Row>
            <Row margin="5%">
            <PassForSaleTextBox text={this.game} />
            </Row>
          </Col>
          <Col span={6}>
            <PurchaseButton height="100%"
              seller_name={this.seller_name}
              price={this.price}
              class={this.class}
              id = {this.id}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PassForSale;
