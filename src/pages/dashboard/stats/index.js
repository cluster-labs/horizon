import React, { Component, Fragment } from 'react'
import statsActions from '../../../redux/cluster/actions' 
import { connect } from 'react-redux'
import formatBytes from '../../../utils/formatBytes'
import { Input, Card, Avatar, Button } from 'antd'
const { Meta } = Card;

class Devices extends Component {

  componentWillMount(){
    this.props.getAllStats()
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
    
    var freespace = cluster.health ? formatBytes(cluster.health.metrics.freespace[0].value, 3) : ""

    var peerList = cluster.peers ? cluster.peers.map((peer, index) => {
      return <Card key={index} style={{ width: 490, marginTop: 16 }} loading={!cluster.peers}>
            <Meta
              avatar={<Avatar shape="square" src="https://d36jcksde1wxzq.cloudfront.net/be7833db9bddb4494d2a7c3dd659199a.png" />}
              title={peer.peername || "Anonymous"}
              description={peer.id}
            />
          </Card>
    }) : "" 

    var status = cluster.status ? cluster.status.map((item) => {
      return <div>
        CID: {item.cid["/"]} <br/>
        {
          this.parseStatus(item.peer_map)
        }
        </div>
    }) : ""

    var cluster_to_ipfs = cluster.health ? <div>{
      this.parseClusterToIpfs(cluster.health.graph.cluster_to_ipfs)
    }</div> : ""
    
    var clusterLinks = cluster.health ? cluster.health.graph.cluster_links
    : ""

    var ipfsLinks = ""

    if(cluster.health) {
      let peerList = this.ipfsPeerList(cluster.health.graph.ipfs_links)
      ipfsLinks = peerList.peers.map((peer, index) => {
        return <Card key={index} style={{ width: 490, marginTop: 16 }} loading={!cluster.peers}>
        <Meta
          avatar={<Avatar shape="square" src="https://dashboard.snapcraft.io/site_media/appmedia/2017/11/ipfs.ico.png" />}
          title={`Peer ${index+1}`}
          description={peer}
        />
      </Card>
      }) 
    }

    return (
      <Fragment>
        <h3><b>Cluster ID</b></h3> 
        <h5>{ cluster.id ? cluster.id.id : "" }</h5>
        Freespace: { freespace }
        <hr />
        <br /><br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h5>Add a Cluster peer</h5>
              <Input placeholder="new node multihash" />
              <br/><br/>
              <Button type="primary" shape="round" icon="plus" size={"large"}>Add</Button>
              &nbsp;&nbsp;<span>Feature in development</span>
            </div>
            <div className="col-sm">
              <h5>Remove a Cluster peer</h5>
              <Input placeholder="node multihash" />
              <br/><br/>
              <Button type="danger" shape="round" icon="minus" size={"large"}>Remove</Button>
              &nbsp;&nbsp;<span>Feature in development</span>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <br /><br />
              <h3><b>Cluster Peers</b></h3>
              { peerList }
            </div>
            <div className="col-sm">
            <br /><br />
            <h3><b>IPFS Peers</b></h3>
              { ipfsLinks }
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cluster: state.cluster
})

const mapDispatchToProps = dispatch => ({
  getAllStats: payload => dispatch(statsActions.getAllStats(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Devices)
