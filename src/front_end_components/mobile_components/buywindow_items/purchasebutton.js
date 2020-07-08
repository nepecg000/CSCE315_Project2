import React from "react";
import handlePurchaseButton from "../../../back_end_components/button_handlers/handlePurchaseButton.js";
import "./buywindow_styles.css";

class PurchaseButton extends React.Component {
  constructor(props) {
    super(props);
    this.seller_name = props.seller_name;
    this.price = props.price;
    this.class = props.class;
    this.id = props.id;
  }

  buttonPressed = e => {
    let pass_id = this.id;
    handlePurchaseButton(pass_id);
  }

  render() {
    return <button className="purchase-button" 
    onClick={this.buttonPressed}>
      Buy!
      </button>;
  }

  // HandlePurchaseButtonClick() {
  //   console.log("Purchase button pressed!");
  // }
}

export default PurchaseButton;
