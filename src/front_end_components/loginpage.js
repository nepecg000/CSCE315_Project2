import React from 'react';
import 'antd/dist/antd.css';
import './controlfiles.css';
import { Form, Icon, Input, Button, Row, Col} from 'antd';
import validateLogin from "../back_end_components/button_handlers/validateLogin.js";
import ImageColumn from "./loginpage_items/imagecolumn.js"
import recreate from '../index.js';
import logo from "./aggiepass_logo.png";


class NormalLoginForm extends React.Component {

    constructor(props){
        super(props);
        this.error_msg = '';
    }

  handleSubmit = e => {
    e.preventDefault();
    let user = null;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(validateLogin(values)){
            user = values;
            this.error_msg = '';
        } else {
            this.error_msg = 'Invalid Login';
        }
        recreate(user);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className="login-form-control" align="center">
        <Row>
            <Col span={5}><ImageColumn logo={logo} className="image-control"/></Col>
            <Col span={14}>
                <div className = "login-form">
                <h1 className="title-text">Welcome to AggiePass!</h1>
                <h4 className = "title-text">Please Enter your TAMU Credentials</h4>
                <div className="form-error-text">{this.error_msg}</div>
        `       <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    </Form.Item>
                </Form>`
                </div>
            </Col>
            <Col span={5}><ImageColumn logo={logo} className="image-control"/></Col>
        </Row>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;