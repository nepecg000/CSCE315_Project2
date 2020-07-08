import React from "react";
import {Row, Col} from 'antd';
import handlePurchaseButton from "../../back_end_components/button_handlers/handlePurchaseButton.js";
import "./buywindow_styles.css";

class PurchaseButton extends React.Component {
  constructor(props) {
    super(props);
    this.pass = props.pass;
    this.user = props.user;
    
  }

  buttonPressed = e => {
    handlePurchaseButton(this.pass, this.user);
  }

  render() {
    //console.log("pass = ", this.pass);
    if(1 == 0){
      return (<div><Col span={4}><img className="handicap-image" src={require("./handicap.jpg")} alt="handicap logo"/></Col>
      <Col span={20}><button className="purchase-button"
      onClick={this.buttonPressed}>
        <div className="buy-text">Buy!</div>
      </button></Col>
      </div>);
    }else {
      return <button className="purchase-button" 
      onClick={this.buttonPressed}>
        Buy!
        </button>;
    }
  }

  // HandlePurchaseButtonClick() {
  //   console.log("Purchase button pressed!");
  // }
}

export default PurchaseButton;
