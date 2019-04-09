import React from 'react'
import { Form, Icon, Input, Button, Upload } from 'antd'

const FormItem = Form.Item

@Form.create()
class SettingsForm extends React.Component {
  state = {}

  render() {
    const { form } = this.props

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h5 className="text-black mt-4">
          <strong>Personal Information</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <FormItem label="Username">
              {form.getFieldDecorator('userName', {
                rules: [{ required: false }],
              })(<Input placeholder="Username" />)}
            </FormItem>
          </div>
          <div className="col-lg-6">
            <FormItem label="Email">
              {form.getFieldDecorator('email', {
                rules: [{ required: false }],
              })(<Input placeholder="Email" />)}
            </FormItem>
          </div>
        </div>
        <h5 className="text-black mt-4">
          <strong>New Password</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <FormItem label="Password">
              {form.getFieldDecorator('password')(<Input placeholder="New password" />)}
            </FormItem>
          </div>
          <div className="col-lg-6">
            <FormItem label="Confirm Password">
              {form.getFieldDecorator('confirmpassword')(<Input placeholder="Confirm password" />)}
            </FormItem>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h5 className="text-black mt-4 mb-3">
              <strong>Profile Avatar</strong>
            </h5>
            <Upload>
              <Button size="small">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="col-lg-6">
            <h5 className="text-black mt-4 mb-3">
              <strong>Profile Background</strong>
            </h5>
            <Upload>
              <Button size="small">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
        </div>
        <div className="form-actions">
          <Button style={{ width: 150 }} type="primary" htmlType="submit" className="mr-3">
            Submit
          </Button>
          <Button htmlType="submit">Cancel</Button>
        </div>
      </Form>
    )
  }
}

export default SettingsForm
