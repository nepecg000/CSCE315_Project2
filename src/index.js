import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Tabs, Button } from "antd";
import SellWindow from "./front_end_components/sellwindow.js";
import BuyWindow from "./front_end_components/buywindow.js";
import recreateMobile from "./front_end_components/mobilerender.js";
let passes_data = require("./back_end_components/database/data_controller.js");

const { TabPane } = Tabs;

function isMobile(){ 
  // return if the screen is a mobile device, calculated using the screen's height and width.
  return(window.innerHeight > window.innerWidth);
}

function recreate(user) {
  //console.log("in recreate()");
  let storage = sessionStorage.getItem('user_profile');
  //console.log("Storage: ",storage);
  //console.log("in recreate: ",user);
  if(isMobile()){
    recreateMobile(user);
    return;
  }
  if(storage !== null) {
    if(user == null){
      user = {};
    }
    if(user.weather === undefined){
      user.weather = {};
    }
    // if user credentials are present
    // parse passes data from JSON object
    let passes = passes_data.default.passes;
    //create window
    ReactDOM.render(<div className="body-background">
      <Tabs className="tab-styling" type="card">
        <TabPane tab="Buy" key="1">
          <BuyWindow passes={passes} user={user}/>
        </TabPane>
        <TabPane tab="Sell" key="2">
          <SellWindow  user={user}/>
        </TabPane>
      </Tabs>
      <Button type="danger" block onClick={function(){window.location.replace("login_page.html")}}>
        Return to Login Page</Button></div>,
      document.getElementById("container")
    );
  } else { 
    // if a login is needed
    window.location.replace("login_page.html");
  }
}

recreate(null);
export default recreate;
