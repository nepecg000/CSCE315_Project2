import React from "react";
import { Form, Select, Input, Button } from "antd";
import "./buywindow_styles.css";
import recreate from "../../index.js";
const { Option } = Select;

class QueryWindow extends React.Component {
  constructor(props) {
    super(props);
    //parse the games into an array
    this.games = Array.from(props.games.values());
    this.control = props.control;
    this.error_txt = "";
    this.user = props.user;
    //console.log(this.games.next().value);
    //console.log(this.games);
  }

  handleFormSubmit = e => {
    //console.log(f);
    e.preventDefault();
    //console.log("Form submitted!");
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // convert undefined elements to null
        if (values.price === undefined) {
          values.price = null;
        }
        if (values.game === undefined || values.game === "NP") {
          values.game = null;
        }
        if (values.class === undefined || values.class === "NP") {
          values.class = null;
        }
        console.log("Query Received Form: ", values);
        let fPrice = parseFloat(values.price); // check if inputted price is valid
        //console.log(values.price);
        //console.log(fPrice);
        if (
          // if price is valid or not inputted, process
          !isNaN(fPrice)
        ) {
          this.error_txt = "";
          this.control.price = fPrice;
        } else if (
          values.price === null || // if no number inputted
          values.price === ""
        ) {
          this.error_txt = "";
          this.control.price = null;
        } else {
          // invalid price, ignore
          this.error_txt = "Please input a valid price.";
          this.control.price = null;
          //console.log("invalid price");
        }
        this.control.class = values.class;
        this.control.game = values.game;
      }
    });
    recreate(this.user);
    //console.log(this.props.form.getFieldValue("class"));
    //console.log(this.props.form.getFieldsValue());
    //this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="query-form">
        <Form
          //labelCol={{ span: 12 }}
          //wrapperCol={{ span: 12 }}
          onSubmit={this.handleFormSubmit}
        >
          <h3 className="query-form-title">Pass Specification</h3>
          <div className="form-error-text">{this.error_txt}</div>
          <Form.Item key="price">
            {getFieldDecorator("price")(<Input placeholder="Max Price" />)}
          </Form.Item>
          <Form.Item key="class">
            {getFieldDecorator("class")(
              <Select placeholder="Classification">
                <Option value="NP" key="NP">
                  No Preference
                </Option>
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
            {getFieldDecorator("game")(
              <Select placeholder="Game">
                <Option value="NP" key="NP">
                  No Preference
                </Option>
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

const WrappedQueryWindow = Form.create({ name: "querywindow" })(QueryWindow);

export default WrappedQueryWindow;
