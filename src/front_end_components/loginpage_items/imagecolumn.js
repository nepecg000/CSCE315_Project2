import React from 'react';
import {Row} from 'antd';
import "./loginpage_styles.css";


class ImageColumn extends React.Component {

    constructor(props){
        super(props);
        this.logo = props.logo;
    }

    render(){
        return (<div>
            <Row>
                <img src={this.logo} className="image-control" alt=""/>
            </Row>
            <Row>
                <img src={this.logo} className="image-control" alt=""/>
            </Row>
            <Row>
                <img src={this.logo} className="image-control" alt=""/>
            </Row>
        </div>);
    }
}

export default ImageColumn;