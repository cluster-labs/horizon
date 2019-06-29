import React, { Component, Fragment } from 'react'
import statsActions from '../../../redux/cluster/actions'
import { connect } from 'react-redux'
import formatBytes from '../../../utils/formatBytes'
import { Input, Card, Avatar, Button, Empty } from 'antd'
import { NavLink } from 'react-router-dom'
const { Meta } = Card

//Assets
import folderLogo from '../../../assets/images/folder.png'
import fileLogo from '../../../assets/images/file.png'

//import ipfs from '../../../utils/ipfs-http-client'

class Devices extends Component {

  componentWillMount() {
    this.props.getFileStructure()
    this.interval = setInterval(this.props.getFileStructure, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  parseStatus = (item) => {
    let result
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        var val = item[key];
      }
    }
  }

  parseClusterToIpfs = (item) => {
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        var val = item[key];
      }
    }
  }

  ipfsPeerList = (peers) => {
    for (var key in peers) {
      if (peers.hasOwnProperty(key)) {
        var val = peers[key]
        return { key: key, peers: val }
      }
    }
  }

  render() {

    var { cluster, browseFolder, removePins } = this.props

    var freespace = cluster.monitor ? formatBytes(cluster.monitor.freespace[0].value, 3) : ""

    var fileStructure = {
      files: [],
      folders: []
    };

    cluster.pins && cluster.pins[0] ? cluster.pins.map((pin) => {
      return pin.isDir ? fileStructure.folders.push({ cid: pin.cid['/'], name: pin.name }) : fileStructure.files.push({ cid: pin.cid['/'], name: pin.name })
    }) : []

    var files = fileStructure.files.map((file, index) => {
      return <a href={`http://localhost:8080/ipfs/${file.cid}`} target="_blank">
        <Card key={index} style={{ width: 490, marginTop: 16, cursor: 'pointer' }} loading={false}>
          <Meta
            avatar={<Avatar shape="square" src={fileLogo} />}
            title={
              <React.Fragment>
                <div className="row m-0 justify-content-between">
                  {file.name === "" ? "[FILE]" : file.name}
                  {<i
                    style={{ cursor: 'pointer' }}
                    onClick={() => removePins(file.cid)}
                    className=" text-danger fa fa-thumb-tack">

                  </i>}
                </div>
              </React.Fragment>
            }
            description={file.cid}
          />
        </Card>
      </a>
    })

    var folders = fileStructure.folders.map((folder, index) => {
      return <a href={`http://localhost:8080/ipfs/${folder.cid}`} target="_blank">
        <Card key={index} style={{ width: 490, marginTop: 16, cursor: 'pointer' }} loading={false}>
          <Meta
            avatar={<Avatar shape="square" src={folderLogo} />}
            title={
              <React.Fragment>
                <div className="row m-0 justify-content-between">
                  {folder.name === "" ? "[DIR]" : folder.name}
                  {<i
                    style={{ cursor: 'pointer' }}
                    onClick={() => removePins(folder.cid)}
                    className=" text-danger fa fa-thumb-tack">

                  </i>}
                </div>
              </React.Fragment>
            }
            description={folder.cid}
          />
        </Card>
      </a>
    })

    files.length == 0 ? files = <Empty /> : null
    folders.length == 0 ? folders = <Empty /> : null

    return (
      <Fragment>
        <h3><b>Cluster ID</b></h3>
        <h5>{cluster.id ? cluster.id.id : ""}</h5>
        Freespace: {freespace}
        <hr />
        <br /><br />

        <h4><b>Folders</b></h4>
        {folders || <Empty />}

        <br /><br />
        <h4><b>Files</b></h4>
        {files || <Empty />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cluster: state.cluster
})

const mapDispatchToProps = dispatch => ({
  getFileStructure: payload => dispatch(statsActions.getFileStructure(payload)),
  browseFolder: payload => dispatch(statsActions.browseFolder(payload)),
  browseFile: payload => dispatch(statsActions.browseFile(payload)),
  removePins: payload => dispatch(statsActions.removePins(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Devices)
