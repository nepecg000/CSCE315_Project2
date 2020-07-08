import React from "react";
import {Row, Col} from "antd";
import WeatherWindow from "./weatherwindow.js";
import GameInfoImage from "./gameinfoimage.js";
import funs from "../../back_end_components/sports/getSportsData.js";
//load the games and cities
const games_data = require("../sellwindow_items/possible_games.json");
const getRanking = funs.getRanking;
const getTime = funs.getTime;

function getCityZip(opponent){
  //console.log("in getCityZip");
  //console.log("OPPONENT = ",opponent);
  for(let i in games_data){
    let game = games_data[i];
    if(game.text === opponent){
      //console.log("returning ",game.city_zip, "because text = ",game.text,"and opponent = ",opponent);
      return game.city_zip;
    }
  }
  //console.log("bailing");
  return "77802";
}

class GameInfoWindow extends React.Component {
  constructor(props) {
    //console.log("in GameInfoWindow constructor");
    super(props);
    this.control = props.control;
    this.user = props.user;
    
    //console.log(games_data);
  }

  render() {
    //console.log("in gameingowindow render");
    this.city = getCityZip(this.control.game);
    //console.log("IN GIW render: ",this.user);
    this.user.weather.city = this.city;
    //console.log("IN GIW render 2: ",this.user);
    console.log("control = ",this.control);
    let ranking = getRanking(this.control.game);
    let time = getTime(this.control.game);
    return (
      <div>
        <Row>
          <Col span={8}><GameInfoImage games_data={games_data}/></Col>
          <Col span={8}>
            <Row><h1 align="center">Opponent:</h1></Row>
            <Row><h1 align="center">{this.control.game}</h1></Row></Col>
          <Col span={8}><GameInfoImage control={this.control} games_data={games_data}/></Col>
        </Row>  
        <Row>
          <div align="center">Opponent Ranking: {ranking}</div>
        </Row>
        <Row>
          <div align="center">Game Time: {time}</div>
        </Row>
        <Row><WeatherWindow user={this.user}/></Row>
        
      </div>
    );
  }
}

export default GameInfoWindow;
