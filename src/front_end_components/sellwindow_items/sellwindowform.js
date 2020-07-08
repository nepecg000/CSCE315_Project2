import React from "react";
import { Form, Select, Input, Button, Checkbox } from "antd";
import "./sellwindowform.css";
import sellPass from "../../back_end_components/button_handlers/handleSellButton.js";
const { Option } = Select;
const possible_games = require("./possible_games.json");

class SellWindowForm extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    //add available games into an array
    this.games = [];
    for (let i = 0; i < possible_games.length; i++) {
      this.games.push(possible_games[i].text);
    }
  }

  handleFormSubmit = e => {
    //console.log(f);
    e.preventDefault();
    //console.log("Form submitted!");
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let user_profile = JSON.parse(sessionStorage.getItem("user_profile"));
        sellPass(user_profile.email, user_profile.name, values.price, 
          values.class, values.game, this.user, values.handicap);
        console.log(user_profile.email);
        
      }
    });
    //console.log(this.props.form.getFieldValue("class"));
    //console.log(this.props.form.getFieldsValue());
    //this.props.form.resetFields();
    //console.log(data);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div align="center">
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Item key="price">
            {getFieldDecorator("price", {
              rules: [{required: true, message: 'Please input a price'}]
            })(<Input placeholder="Price" />)}
          </Form.Item>
          <Form.Item key="class">
            {getFieldDecorator("class", {
              rules: [{required: true, message: 'Please select a classification'}]
            })(
              <Select placeholder="Classification">
                <Option value="U1" key="U1">
                  U1
                </Option>
                <Option value="U2" key="U2">
                  U2
                </Option>
                <Option value="U3" key="U3">
                  U3
                </Option>
                <Option value="U4" key="U4">
                  U4
                </Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item key="game">
            {getFieldDecorator("game", {
              rules: [{required: true, message: 'Please select a game'}]
            })(
              <Select placeholder="Game">
                {this.games.map(game => {
                  return (
                    <Option value={game} key={game}>
                      {game}
                    </Option>
                  );
                })}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('handicap', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox>Handicap?</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="query-button"
              text="howdy"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedSellWindowForm = Form.create({ name: "sellwindowform" })(
  SellWindowForm
);

export default WrappedSellWindowForm;
