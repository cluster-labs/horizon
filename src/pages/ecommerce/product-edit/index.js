import React from 'react'
import { Input, TreeSelect, Select, Button, Upload, Icon, message, Form } from 'antd'
import { Helmet } from 'react-helmet'

const { TreeNode } = TreeSelect
const { Option } = Select
const { Dragger } = Upload
const { TextArea } = Input
const FormItem = Form.Item

const dragprop = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const { status } = info.file
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

@Form.create()
class ProductEdit extends React.Component {
  render() {
    const { form } = this.props
    return (
      <div>
        <Helmet title="Product Edit" />
        <div className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Product Edit</strong>
            </div>
          </div>
          <div className="card-body">
            <h4 className="text-black mb-3">
              <strong>Main Parameters</strong>
            </h4>
            <Form layout="vertical">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <FormItem label="Username">
                          {form.getFieldDecorator('title')(<Input placeholder="Product title" />)}
                        </FormItem>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <FormItem label="SKU">
                          {form.getFieldDecorator('sku')(<Input placeholder="Product SKU" />)}
                        </FormItem>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <FormItem label="Category">
                          {form.getFieldDecorator('category')(
                            <TreeSelect
                              id="product-edit-category"
                              showSearch
                              style={{ width: '100%', display: 'block' }}
                              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                              placeholder="Please select category"
                              allowClear
                              multiple
                              treeDefaultExpandAll
                              onChange={this.onChangeCategory}
                            >
                              <TreeNode value="furniture" title="Furniture" key="0">
                                <TreeNode value="tables" title="Tables" key="0-0" />
                                <TreeNode value="chairs" title="Chairs" key="0-1">
                                  <TreeNode
                                    value="roundedchairs"
                                    title="Rounded Chairs"
                                    key="0-1-0"
                                  />
                                  <TreeNode
                                    value="squaredchairs"
                                    title="Squared Chairs"
                                    key="0-1-1"
                                  />
                                </TreeNode>
                              </TreeNode>
                              <TreeNode value="electronics" title="Electronics" key="1">
                                <TreeNode value="tv" title="TV" key="1-0" />
                                <TreeNode value="consoles" title="Consoles" key="1-1">
                                  <TreeNode value="playstation" title="Playstation" key="1-1-0" />
                                  <TreeNode value="xbox" title="Xbox" key="1-1-1" />
                                </TreeNode>
                              </TreeNode>
                            </TreeSelect>,
                          )}
                        </FormItem>
                      </div>
                      <div className="form-group">
                        <FormItem label="Short description">
                          {form.getFieldDecorator('shortDescription')(
                            <TextArea rows={3} id="product-edit-shordescr" />,
                          )}
                        </FormItem>
                      </div>
                      <div className="form-group">
                        <FormItem label="Full description">
                          {form.getFieldDecorator('fullDescription')(
                            <TextArea rows={3} id="product-edit-fulldescr" />,
                          )}
                        </FormItem>
                      </div>
                      <h4 className="text-black mt-2 mb-3">
                        <strong>Pricing</strong>
                      </h4>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <FormItem label="Total Price">
                              {form.getFieldDecorator('totalPrice')(
                                <Input id="product-edit-total-price" placeholder="Total Price" />,
                              )}
                            </FormItem>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <FormItem label="Discount Price">
                              {form.getFieldDecorator('discountPrice')(
                                <Input
                                  id="product-edit-discountprice"
                                  placeholder="Discount Price"
                                />,
                              )}
                            </FormItem>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-black mt-2 mb-3">
                        <strong>Attributes</strong>
                      </h4>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <FormItem label="Colors">
                              {form.getFieldDecorator('colors')(
                                <Select
                                  id="product-edit-colors"
                                  showSearch
                                  style={{ width: '100%' }}
                                  placeholder="Select a color"
                                  optionFilterProp="children"
                                  filterOption={(input, option) =>
                                    option.props.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="blue">Blue</Option>
                                  <Option value="red">Red</Option>
                                  <Option value="green">Green</Option>
                                </Select>,
                              )}
                            </FormItem>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <FormItem label="Size">
                              {form.getFieldDecorator('size')(
                                <Select
                                  id="product-edit-size"
                                  showSearch
                                  style={{ width: '100%' }}
                                  placeholder="Select a size"
                                  optionFilterProp="children"
                                  filterOption={(input, option) =>
                                    option.props.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="s">Small</Option>
                                  <Option value="m">Middle</Option>
                                  <Option value="xl">Extra large</Option>
                                </Select>,
                              )}
                            </FormItem>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-actions">
                            <Button type="primary" className="mr-2">
                              Save Product
                            </Button>
                            <Button type="default">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <Dragger {...dragprop} className="height-300 d-block mb-3">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit from uploading company
                      data or other band files
                    </p>
                  </Dragger>
                  <div>
                    <Upload>
                      <Button>
                        <Icon type="upload" /> Select File
                      </Button>
                    </Upload>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductEdit
