import React, { Component, Fragment } from 'react'
import statsActions from '../../../redux/cluster/actions' 
import { connect } from 'react-redux'
import formatBytes from '../../../utils/formatBytes'
import { Input, Card, Avatar, Button } from 'antd'
const { Meta } = Card;

import ipfs from '../../../utils/ipfs-http-client'

class Devices extends Component {

  componentWillMount(){
    this.props.getFileStructure()
  }

  parseStatus = (item) => {
    let result
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        var val = item[key];
        console.log("STATUS", val);
      }
    }
  }

  parseClusterToIpfs = (item) => {
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        var val = item[key];
        console.log("CTI", val);
      }
    }
  }

  ipfsPeerList = (peers) => {
    for (var key in peers) {
      if(peers.hasOwnProperty(key)) {
        var val = peers[key]
        return {key: key, peers: val}
      }
    }
  }



  render() {

    var { cluster } = this.props     
    
    var freespace = cluster.monitor ? formatBytes(cluster.monitor.freespace[0].value, 3) : ""

    var fileStructure = {
      files: [],
      folders: []
    };

    cluster.pins && cluster.pins[0].Hash ? cluster.pins.map((pin) => {
      return pin.isDir ? fileStructure.folders.push(pin.Hash['/']) : fileStructure.files.push(pin.Hash['/'])
    }) : []

    var files = fileStructure.files.map((file, index) => {
      return <Card key={index} style={{ width: 490, marginTop: 16 }} loading={false}>
      <Meta
        avatar={<Avatar shape="square" src="https://www.iconsdb.com/icons/preview/caribbean-blue/text-file-xxl.png" />}
        title={"[FILE]"}
        description={file}
      />
    </Card>
    })

    var folders = fileStructure.folders.map((folder, index) => {
      return <Card key={index} style={{ width: 490, marginTop: 16 }} loading={false}>
            <Meta
              avatar={<Avatar shape="square" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698927-icon-94-folder-512.png" />}
              title={"[DIR]"}
              description={folder}
            />
          </Card>
    })

    return (
      <Fragment>
        <h3><b>Cluster ID</b></h3> 
        <h5>{ cluster.id ? cluster.id.id : "" }</h5>
        Freespace: { freespace }
        <hr />
        <br /><br />
        
        <h4><b>Folders</b></h4>
        { folders }

        <br /><br />
        <h4><b>Files</b></h4>
        { files }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cluster: state.cluster
})

const mapDispatchToProps = dispatch => ({
  getFileStructure: payload => dispatch(statsActions.getFileStructure(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Devices)
