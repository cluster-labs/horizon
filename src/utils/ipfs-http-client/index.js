var ipfsClient = require('ipfs-http-client')

// connect to ipfs daemon API server
module.exports = ipfsClient('localhost', '5001', { protocol: 'http' })