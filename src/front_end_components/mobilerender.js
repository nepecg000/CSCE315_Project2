import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Tabs } from "antd";
import SellWindow from "../front_end_components/sellwindow.js";
import BuyWindow from "./mobile_components/buywindow_mobile.js";
import WrappedNormalLoginForm from "../front_end_components/loginpage.js";
let passes_data = require("../back_end_components/database/data_controller.js");

const { TabPane } = Tabs;

function recreateMobile(user) {
  if(user !== null) {
    //if no user credentials are present
    let passes = passes_data.default.passes;

    //create window
    ReactDOM.render(
      <Tabs className="tab-styling" type="card">
        <TabPane tab="Buy" key="1">
          <BuyWindow passes={passes} user={user}/>
          
        </TabPane>
        <TabPane tab="Sell" key="2">
          <SellWindow  user={user}/>
        </TabPane>
      </Tabs>,
      document.getElementById("container")
    );
  } else {
    ReactDOM.render(
      <WrappedNormalLoginForm />, 
      document.getElementById('container'));
  }
}
export default recreateMobile;
