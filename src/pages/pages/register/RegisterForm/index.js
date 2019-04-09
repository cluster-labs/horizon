import React from 'react'
import { Form, Input, Icon, Checkbox, Button } from 'antd'

const FormItem = Form.Item

class RegisterFormComponent extends React.Component {
  state = {
    confirmDirty: false,
  }

  handleConfirmBlur = e => {
    const { value } = e.target
    const { confirmDirty } = this.state
    this.setState({
      confirmDirty: confirmDirty || !!value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // const { form } = this.props
    // form.validateFields((err, values) => {
    // })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    const { confirmDirty } = this.state
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { form } = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem validateStatus="validating">
          {form.getFieldDecorator('Nickname', {
            rules: [{ required: true, message: 'Please input your Nickname!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email or Nickname"
            />,
          )}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Input your password"
            />,
          )}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              placeholder="Confirm your password"
            />,
          )}
        </FormItem>

        <div className="form-actions">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>
          <span className="ml-3">
            {form.getFieldDecorator('mailsubscription', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Mail Subscription</Checkbox>)}
          </span>
        </div>
      </Form>
    )
  }
}

const RegisterForm = Form.create()(RegisterFormComponent)
export default RegisterForm
