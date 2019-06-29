import React, { Component, Fragment } from 'react'
import statsActions from '../../../redux/cluster/actions'
import { connect } from 'react-redux'
import formatBytes from '../../../utils/formatBytes'
import { Input, Card, Avatar, Button, Empty, Switch, Row, Col, Tooltip, Progress } from 'antd'
const { Meta } = Card;

//Assets
import ipfsLogo from '../../../assets/images/ipfs.png'
import clusterLogo from '../../../assets/images/cluster.png'

class Stats extends Component {

  interval = null

  componentWillMount() {
    this.props.getAllStats()
    this.interval = setInterval(this.props.getAllStats, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  state = {
    switch: false
  }

  handleSwitch = () => {
    this.setState(prevState => {
      return { switch: !prevState.switch }
    })
    this.props.getAllStats()
  }

  parseStatus = (item) => {
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        var val = item[key]
      }
    }
  }

  parseClusterToIpfs = (item) => {
    let c2pList = []
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        c2pList.push(item[key])
      }
    }
    return c2pList
  }

  ipfsPeerList = (peers) => {
    for (var key in peers) {
      if (peers.hasOwnProperty(key)) {
        var val = peers[key]
        return { key: key, peers: val }
      }
    }
  }

  getIpfsSwarmList = (filter, graph) => {
    let peerList = []

    //We only want the connected IPFS Peer
    if (filter) {
      for (var cluster_peer in graph.cluster_to_ipfs) {
        if (graph.cluster_to_ipfs.hasOwnProperty(cluster_peer)) {
          peerList.push({ cid: graph.cluster_to_ipfs[cluster_peer], cluster_peer: cluster_peer })
        }
      }
    }

    //We want all the IPFS swarm peers
    else {
      for (var cluster_peer in graph.ipfs_links) {
        if (graph.ipfs_links.hasOwnProperty(cluster_peer)) {
          graph.ipfs_links[cluster_peer].forEach(ipfs_link => {
            peerList.push({ cid: ipfs_link, cluster_peer: cluster_peer })
          })
        }
      }
    }
    return peerList
  }

  render() {

    var { cluster, removeClusterPeer } = this.props

    var freespace = cluster.health ? formatBytes(cluster.health.metrics.freespace[0].value, 3) : ""


    //Populate the IPFS Cluster Peer List with formatting

    var peerList = cluster.peers ? cluster.peers.map((peer, index) => {
      return <Card key={index} style={{ marginTop: 16 }} loading={!cluster.peers}>
        <Meta
          avatar={<Avatar shape="square" src={clusterLogo} />}
          title={
            <React.Fragment>
              <div className="row m-0 justify-content-between">
                {peer.peername || "Anonymous"}
                {cluster.id != peer.id ? null : <i onClick={removeClusterPeer(peer.id)} className=" text-danger fa fa-times"></i>}
              </div>
            </React.Fragment>
          }
          description={(<Tooltip title="Click to Copy"><p className="m-0" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "blue" }}><b>{peer.id}</b></p></Tooltip>)}
        />
      </Card>
    }) : ""


    //Populate the IPFS Swarm Peer List

    //Get the peerList accroding to the filter
    let SwarmPeerList = []
    if (cluster.health) {
      SwarmPeerList = this.getIpfsSwarmList(this.state.switch, cluster.health.graph)
    }

    //Add formatting to the peerList
    SwarmPeerList = SwarmPeerList.map((peer, index) => {
      return <Card key={index} style={{ marginTop: 16 }} loading={!cluster.peers}>
        <Meta
          avatar={<Avatar shape="square" src={ipfsLogo} />}
          title={`Peer ${index + 1}`}
          description={(<Tooltip title="Click to Copy"><p className="m-0" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{peer.cid}</p></Tooltip>)}
        />
      </Card>
    })


    var status = cluster.status ? cluster.status.map((item) => {
      return <div>
        CID: {item.cid["/"]} <br />
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

    if (cluster.health) {
      let peerList = this.ipfsPeerList(cluster.health.graph.ipfs_links)
      console.log("HAAAAAAAAAAAAAA", peerList)
      ipfsLinks = peerList.peers.map((peer, index) => {
        return <Card key={index} style={{ marginTop: 16 }} loading={!cluster.peers}>
          <Meta
            avatar={<Avatar shape="square" src={ipfsLogo} />}
            title={`Peer ${index + 1}`}
            description={(<Tooltip title="Click to Copy"><p className="m-0" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{peer}</p></Tooltip>)}
          />
        </Card>
      })
    }

    return (
      <Fragment>
        <Card>
          <Row justify="space-between" type="flex">
            <div>
              <h2><b>Cluster Stats</b></h2>
              <h5 className="mt-4">Local Cluster Peer: <b>{cluster.id ? cluster.id.id : ""}</b></h5>
              <h5 className="mb-0 mt-2">Connected Cluster Peers: <b>{peerList.length || 0}</b></h5>
              <h5 className="mb-0 mt-2">Connected Ipfs Swarm Peers: <b>{SwarmPeerList.length}</b></h5>
            </div>
            <div>
              <Progress type="circle" percent={(parseInt(freespace.split(" ")[0])) * 10} format={() => (<span>Free<br /><span style={{ fontSize: "14px" }}>{freespace}</span></span>)} />
            </div>
          </Row>
        </Card>




        <Row>
          <Col md={12}>
            <br /><br />
            <h3><b>Cluster Peers</b></h3>
            {peerList.length > 0 ? peerList : <Empty description="No Peers" />}
          </Col>
          <Col md={12}>
            <br /><br />
            <h3 className="row mx-0 justify-content-between"><b>IPFS Peers</b><Switch onChange={this.handleSwitch} checked={this.state.switch} ></Switch></h3>
            {SwarmPeerList.length > 0 ? SwarmPeerList : <Empty description="No Peers" />}
          </Col>
        </Row>

      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cluster: state.cluster
})

const mapDispatchToProps = dispatch => ({
  getAllStats: payload => dispatch(statsActions.getAllStats(payload)),
  removeClusterPeer: cid => dispatch(statsActions.removeClusterPeer(cid))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
