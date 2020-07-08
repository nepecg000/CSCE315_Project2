import React from 'react';
import {Row, Col} from 'antd';
import getWeather from "../../back_end_components/getWeather.js";
import "./buywindow_styles.css";


class WeatherWindow extends React.Component {

    constructor(props){
        super(props);
        this.user = props.user;
        this.city = null;
        
    }

    render(){
        var user = this.user;
        //console.log("this.user.weather.city = ",this.user.weather.city);
        if(this.city !== this.user.weather.city){
            getWeather(this.user.weather.city,function(weather_data) {
                //console.log("in the callback");
                user.weather = weather_data;
              });
        }
        return(
            <div className="weather-box">
                <Row>
                    <div className="gameday-weather-title">Gameday Weather in: {this.user.weather.city_name}</div>
                    <div>Please click SUBMIT again to reload weather data.</div>
                </Row>
                <div className="weather-data-area">
                    <Row>
                        <Col span={12}>Description: {this.user.weather.description}</Col>
                        <Col span={12}>Current Temperature: {this.user.weather.temp}°F</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Low Temperature: {this.user.weather.temp_min}°F</Col>
                        <Col span={12}>High Temperature: {this.user.weather.temp_max}°F</Col>
                    </Row>
                </div>
                <Row>
                     
                </Row>
            </div>
        )
    }



}

export default WeatherWindow;