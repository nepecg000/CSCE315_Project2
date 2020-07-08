import React from "react";
import { Row, Col } from "antd";
import PurchaseButton from "./purchasebutton.js";
import PassForSaleTextBox from "./passforsaletextbox.js";
import "./buywindow_styles.css";

class PassForSale extends React.Component {
  constructor(props) {
    super(props);
    //extract data needed for a pass for sale
    this.pass = props.pass;
    this.user = props.user;

  }

  render() {
    //console.log("this.pass = ",this.pass);
    if(this.pass.id == null){
      return(<div></div>);
    }
            let image = (<div></div>);
    if(this.pass.handicap == 1){
        image = <img className="handicap-image" src={require("./handicap.jpg")} alt = "handicap logo"/>
            }
    return (
      <div className="pass-for-sale">
        <Row>
          <Col span={5}>
            <PassForSaleTextBox text={this.pass.seller_name} />
          </Col>
          <Col span={3}>
            <PassForSaleTextBox text={'$' + this.pass.price.toFixed(2)} />
          </Col>
          <Col span={5}>
            <PassForSaleTextBox text={this.pass.class} />
          </Col>
          <Col span={5}>
            <PassForSaleTextBox text={this.pass.game} />
          </Col>
                            <Col span={2}>{image}</Col>
          <Col span={4}>
            <PurchaseButton
              pass={this.pass}
              user={this.user}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PassForSale;
