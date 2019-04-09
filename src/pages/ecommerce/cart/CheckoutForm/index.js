import React from 'react'
import { Form, Input, Icon } from 'antd'

const FormItem = Form.Item

@Form.create()
class CheckoutForm extends React.Component {
  render() {
    const { form } = this.props

    return (
      <Form>
        <h4 className="text-black mb-3">
          <strong>Shipment Details</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <FormItem label="Email">
                {form.getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your Email!' }],
                })(<Input id="checkout-email" placeholder="Email" />)}
              </FormItem>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <FormItem label="Phone Number">
                {form.getFieldDecorator('phoneNumber', {
                  rules: [{ required: true, message: 'Please input your Phone Number!' }],
                })(<Input id="checkout-phnum" placeholder="Phone Number" />)}
              </FormItem>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <FormItem label="Name">
                {form.getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your Name!' }],
                })(<Input id="checkout-name" placeholder="Name" />)}
              </FormItem>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <FormItem label="Surname">
                {form.getFieldDecorator('surname', {
                  rules: [{ required: true, message: 'Please input your Surname!' }],
                })(<Input id="checkout-surname" placeholder="Surname" />)}
              </FormItem>
            </div>
          </div>
        </div>
        <div className="form-group">
          <FormItem label="City">
            {form.getFieldDecorator('city', {
              rules: [{ required: true, message: 'Please input your City!' }],
            })(<Input id="checkout-city" placeholder="City" />)}
          </FormItem>
        </div>
        <div className="form-group">
          <FormItem label="Adress">
            {form.getFieldDecorator('adress', {
              rules: [{ required: true, message: 'Please input your Adress!' }],
            })(<Input id="checkout-adress" placeholder="Adress" className="mb-3" />)}
          </FormItem>
        </div>
        <h4 className="text-black mb-3">
          <strong>Billing Details</strong>
        </h4>
        <div className="form-group">
          <FormItem label="Card Number">
            {form.getFieldDecorator('cardnum', {
              rules: [{ required: true, message: 'Please input Card Number!' }],
            })(<Input addonBefore={<Icon type="credit-card" />} placeholder="Card Number" />)}
          </FormItem>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="form-group">
              <FormItem label="Expiration Date">
                {form.getFieldDecorator('expirationdate', {
                  rules: [{ required: true, message: 'Please input Card Expiration Date!' }],
                })(<Input id="checkout-cardexpdate" placeholder="MM / YY" />)}
              </FormItem>
            </div>
          </div>
          <div className="col-md-5 pull-right">
            <div className="form-group">
              <FormItem label="Card CVC">
                {form.getFieldDecorator('cardcvc', {
                  rules: [{ required: true, message: 'Please input Card CVC!' }],
                })(<Input id="checkout-cardholder" placeholder="CVC" />)}
              </FormItem>
            </div>
          </div>
        </div>
        <div className="form-group">
          <FormItem label="Card Holder Name">
            {form.getFieldDecorator('cardholdername', {
              rules: [{ required: true, message: 'Please input Card Holder Name!' }],
            })(<Input id="checkout-cardholder" placeholder="Name and Surname" />)}
          </FormItem>
        </div>
      </Form>
    )
  }
}

export default CheckoutForm
