import types from './type'
import ipfsCluster from '../../utils/ipfs-cluster-api'
import clusterPinToIpfsPin from '../../utils/clusterPinToIpfsPin'
import ipfs from '../../utils/ipfs-http-client'
import sortPins from '../../utils/sortPins'
import unixfs from 'ipfs-unixfs'

const id = () => {
    return ipfsCluster.id()
}

const getStatus = (args, options) => {
    return ipfsCluster.status(args, options)
}

const getGraph = (options) => {
    return ipfsCluster.health.graph(options)
}

const getMetrics = (args, options) => {
    return ipfsCluster.health.metrics(args, options)
}

const getMonitor = (args, options) => {
    return ipfsCluster.monitor(args, options)
}

const getPeers = () => {
    return ipfsCluster.peers.ls()
}

const addPeer = (arg) => {
    return ipfsCluster.peers.add(args)
}

const removePeer = (args) => {
    return ipfsCluster.peers.rm(args)
}

const getPins = (options) => {
    return ipfsCluster.pins.ls(options)
}

const addPins = (args, options) => {
    return ipfsCluster.pins.ls(args, options)
}

const removePins = (args, options) => {
    return ipfsCluster.pins.rm(args, options)
}

const sync = (args, options) => {
    return ipfsCluster.sync(args, options)
}

const recover = (args, options) => {
    return ipfsCluster.recover(args, options)
}

const getAllStats = payload => dispatch => {
    
    let promises = [
        ipfsCluster.id(),
        ipfsCluster.status(),
        ipfsCluster.health.graph(),
        ipfsCluster.health.metrics('freespace'),
        ipfsCluster.health.metrics('ping'),
        ipfsCluster.peers.ls(),
        ipfsCluster.pin.ls(),
      ];
      Promise.all(promises)
      .then(stats => {
          let allStats = {
              id:   stats[0],
              status: stats[1],
              health: {
                  graph: stats[2],
                  metrics: {
                      freespace: stats[3],
                      ping: stats[4]
                  }
              },
              peers: stats[5],
              pins: stats[6],
          }

        dispatch({
            type: types.GET_ALL_STATS,
            payload: allStats
        })

      })
      .catch((err) => {
          console.error(err)
      })
}

const getFileStructure = payload => dispatch => {
    // Get more info on each of the pinned items.
      // We assume objects with no links are files. Objects with links need to
      // be looked up and unmarshaled by unixfs to discover type.
      // TODO:  Explore support for non-unixfs objects

      let objectDataPromises, pins, id, freespace;

      let promises = [
            ipfsCluster.id(),
            ipfsCluster.health.metrics('freespace'),
            ipfsCluster.pin.ls()
        ]
      Promise.all(promises)
      .then((data) => {

        id = data[0]
        freespace = data[1]

        pins = data[2].map((pin) => clusterPinToIpfsPin(pin)) 
        var statPromises = [];
        for (var i = 0; i < pins.length; i++) {
            var statReq = ipfs.object.stat(pins[i].Hash['/']);
            statPromises.push(statReq);
        }
        return Promise.all(statPromises)
      })
      .then((stats) => {
        objectDataPromises = {};
        for (var i = 0; i < pins.length; i++) {
            var stat = stats[i];
            if (stat.NumLinks > 0) {
            //Not Files
            //unmarshall the Not Files to explore it's type
            objectDataPromises[i] = ipfs.object.data(pins[i].Hash['/'])
            } else {
            //Files
            //set isDir=false
            pins[i].isDir = false;
            }
        }
        return Promise.all(Object.values(objectDataPromises));
      }).then((data) => {
        var objectDataIndices = Object.keys(objectDataPromises);
        for (var i = 0; i < objectDataIndices.length; i++) {
            var pinIndex = objectDataIndices[i];
            var ufsObject = unixfs.unmarshal(data[i]);
            pins[pinIndex].isDir = ufsObject.type == 'directory' || ufsObject.type == 'symlink';
        }
        var sortedPins = sortPins(pins);
        
        console.log("PINS: ", pins)

        dispatch({
            type: types.GET_FILESTRUCTURE,
            payload: {
                id: id,
                monitor: {
                    freespace: freespace
                },
                pins: pins
            }
        })
      })
      
}

export default {
    id,
    getStatus,
    getGraph,
    getMetrics,
    getMonitor,
    getPeers,
    getPins,
    addPeer,
    removePeer,
    addPins,
    removePins,
    sync,
    recover,
    getAllStats,
    getFileStructure
}