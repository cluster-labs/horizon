import React from 'react'
import { Helmet } from 'react-helmet'

class GridBootstrap extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Grid" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Grid Options</strong>
              <a
                href="http://v4-alpha.getbootstrap.com/layout/grid/bootstrap"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary ml-4"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </div>
          </div>
          <div className="card-body">
            <p>
              While Bootstrap uses aaa<code>em</code>s or <code>rem</code>s for defining most sizes,{' '}
              <code>px</code>s are used for grid breakpoints and container widths. This is because
              the viewport width is in pixels and does not change with the{' '}
              <a href="https://drafts.csswg.org/mediaqueries-3/#units">font size</a>.
            </p>
            <p>
              See how aspects of the Bootstrap grid system work across multiple devices with a handy
              table.
            </p>
            <br />
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th />
                    <th>
                      Extra small
                      <br />
                      <small>&lt;576px</small>
                    </th>
                    <th>
                      Small
                      <br />
                      <small>≥576px</small>
                    </th>
                    <th>
                      Medium
                      <br />
                      <small>≥768px</small>
                    </th>
                    <th>
                      Large
                      <br />
                      <small>≥992px</small>
                    </th>
                    <th>
                      Extra large
                      <br />
                      <small>≥1200px</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Grid behavior
                    </th>
                    <td>Horizontal at all times</td>
                    <td colSpan="4">Collapsed to start, horizontal above breakpoints</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Container width
                    </th>
                    <td>None (auto)</td>
                    <td>576px</td>
                    <td>720px</td>
                    <td>940px</td>
                    <td>1140px</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Class prefix
                    </th>
                    <td>
                      <code>.col-</code>
                    </td>
                    <td>
                      <code>.col-sm-</code>
                    </td>
                    <td>
                      <code>.col-md-</code>
                    </td>
                    <td>
                      <code>.col-lg-</code>
                    </td>
                    <td>
                      <code>.col-xl-</code>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      # of columns
                    </th>
                    <td colSpan="5">12</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Gutter width
                    </th>
                    <td colSpan="5">30px (15px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Nestable
                    </th>
                    <td colSpan="5">Yes</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Offsets
                    </th>
                    <td colSpan="5">Yes</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Column ordering
                    </th>
                    <td colSpan="5">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Example: Stacked-to-Horizontal</strong>
            </div>
          </div>
          <div className="card-body">
            <p>
              Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid
              system that starts out stacked on mobile devices and tablet devices (the extra small
              to small range) before becoming horizontal on desktop (medium) devices. Place grid
              columns in any <code>.row</code>.
            </p>
            <br />
            <div className="row">
              <div className="col-md-8">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-8</div>
              </div>
              <div className="col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-4</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-4</div>
              </div>
              <div className="col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-4</div>
              </div>
              <div className="col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-4</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-6</div>
              </div>
              <div className="col-md-6">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-6</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
              <div className="col-md-1">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-md-1</div>
              </div>
            </div>
          </div>
        </section>
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Example: Mobile and Desktop</strong>
            </div>
          </div>
          <div className="card-body">
            <p>
              Don’t want your columns to simply stack in smaller devices? Use the extra small and
              medium device grid classes by adding <code>.col-xs-*</code> and <code>.col-md-*</code>{' '}
              to your columns. See the example below for a better idea of how it all works.
            </p>
            <br />
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">
                  .col-xs-12 .col-md-8
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">col-xs-6 .col-md-4</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-xs-6 .col-md-4</div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-xs-6 .col-md-4</div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="w100 mb-4 px-3 py-2 bg-default text-white">.col-xs-6 .col-md-4</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default GridBootstrap
