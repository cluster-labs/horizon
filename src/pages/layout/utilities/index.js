import React from 'react'
import { Helmet } from 'react-helmet'

class Utilities extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Utilities" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Utilities</strong>
              <a
                href="https://getbootstrap.com/docs/4.1/utilities/borders/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary ml-4"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="alert alert-warning" role="alert">
              <p className="mb-0">
                <strong>Attention!</strong> This is only a part of all Bootstrap Utilites. Follow
                next link to get information about all of them:{' '}
                <a
                  href="https://getbootstrap.com/docs/4.1/utilities/borders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  Bootstrap Framework Documentation
                </a>
              </p>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6">
                <div className="margin-bottom-0">
                  <h5 className="text-black">
                    <strong>Color Utilities</strong>
                  </h5>
                  <br />
                  <div className="mb-5 table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-default</code>
                          </td>
                          <td>
                            <span className="text-default">Set Default color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-black</code>
                          </td>
                          <td>
                            <span className="text-black">Set Black color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-primary</code>
                          </td>
                          <td>
                            <span className="text-primary">Set Primary color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-secondary</code>
                          </td>
                          <td>
                            <span className="text-secondary">Set Secondary color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-success</code>
                          </td>
                          <td>
                            <span className="text-success">Set Success color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-info</code>
                          </td>
                          <td>
                            <span className="text-info">Set Info color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-warning</code>
                          </td>
                          <td>
                            <span className="text-warning">Set Warning color to element</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-danger</code>
                          </td>
                          <td>
                            <span className="text-danger">Set Danger color to element</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="margin-bottom-0">
                  <h5 className="text-black">
                    <strong>Display Property</strong>
                  </h5>
                  <br />
                  <div className="mb-5 table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.d-inline</code>
                          </td>
                          <td>Forces the element to behave like an inline element</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.d-inline-block</code>
                          </td>
                          <td>Forces the element to behave like an inline-block element</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.d-block</code>
                          </td>
                          <td>Forces the element to behave like a block element</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-5">
                  <h5 className="text-black">
                    <strong>Underlined Links</strong>
                  </h5>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.utils__link--underlined</code>
                          </td>
                          <td>
                            <a
                              href="javascript: void(0)"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="utils__link--underlined"
                            >
                              Underlined Link
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.utils__link--blue</code>
                          </td>
                          <td>
                            <a
                              href="javascript: void(0)"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="utils__link--blue"
                            >
                              Blue Link
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.utils__link--underlined.cat__core__link--blue</code>
                          </td>
                          <td>
                            <a
                              href="javascript: void(0)"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="utils__link--underlined utils__link--blue"
                            >
                              Underlined and Blue Link
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-5">
                  <h5 className="text-black">
                    <strong>Font Weight & Style</strong>
                  </h5>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-weight-normal</code>
                          </td>
                          <td className="font-weight-normal">Normal text</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-weight-bold</code>
                          </td>
                          <td className="font-weight-bold">Bold text</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-italic</code>
                          </td>
                          <td className="font-italic">Italic text</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-5">
                  <h5 className="text-black">
                    <strong>Text Transformation</strong>
                  </h5>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-lowercase</code>
                          </td>
                          <td>Transform text to lowercase</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-uppercase</code>
                          </td>
                          <td>Transform text to uppercase</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-capitalize</code>
                          </td>
                          <td>Transform text to capitalize</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <div className="utils__example">
                    <p className="text-lowercase">Lowercased text</p>
                    <p className="text-uppercase">Uppercased text</p>
                    <p className="text-capitalize">Capitalized text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-5">
                  <h5 className="text-black">
                    <strong>Text Wrapping</strong>
                  </h5>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-truncate</code>
                          </td>
                          <td>Truncating and prevents text from wrapping into multiple lines</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-break</code>
                          </td>
                          <td>
                            Breaks strings if their length exceeds the width of their container
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-nowrap</code>
                          </td>
                          <td>Prevents text from wrapping into multiple lines</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <div className="utils__example">
                    <div className="row">
                      <div className="col-md-4">
                        <div
                          className="text-truncate height-100"
                          style={{ border: '1px dashed #e6e8ea' }}
                        >
                          This is text truncate. This is text truncate. This is text truncate. This
                          is text truncate
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="text-break height-100"
                          style={{ border: '1px dashed #e6e8ea' }}
                        >
                          This-is-text-break.This-is-text-break.This-is-text-break.This-is-text-break
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="text-nowrap height-100"
                          style={{ border: '1px dashed #e6e8ea', overflow: 'hidden' }}
                        >
                          This is text nowrap. This is text nowrap. This is text nowrap. This is
                          text nowrap
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-5">
                  <h5 className="text-black">
                    <strong>Font Size</strong>
                  </h5>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-*</code>
                          </td>
                          <td>
                            Available values: 0, 10, 12, 14, 16, 18, 20, 24, 26, 30, 40, 50, 60, 70
                            , 80
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-0</code>
                          </td>
                          <td>font-size: 0px</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-10</code>
                          </td>
                          <td>font-size: 10px</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-12</code>
                          </td>
                          <td>font-size: 12px</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-14</code>
                          </td>
                          <td>font-size: 14px</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-16</code>
                          </td>
                          <td>font-size: 16px</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-18</code>
                          </td>
                          <td>font-size: 18px</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.font-size-20</code>
                          </td>
                          <td>font-size: 20px</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-5">
                  <h5 className="text-black">
                    <strong>Text Alignment</strong>
                  </h5>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <colgroup>
                        <col className="col-xs-4" />
                        <col className="col-xs-8" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="text-nowrap">Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-left</code>
                          </td>
                          <td>Left aligned text</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-center</code>
                          </td>
                          <td>Center aligned text</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-right</code>
                          </td>
                          <td>Right aligned text</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <code>.text-justify</code>
                          </td>
                          <td>Justified text</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <div className="utils__example">
                    <p className="text-left">Left aligned text</p>
                    <p className="text-center">Center aligned text</p>
                    <p className="text-right">Right aligned text</p>
                    <p className="text-justify">
                      Justified text: Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Utilities
