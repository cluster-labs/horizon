const ipfsCluster = require('ipfs-cluster-api')
const cluster = ipfsCluster('127.0.0.1', '9094', {protocol: 'http'})
module.exports = cluster