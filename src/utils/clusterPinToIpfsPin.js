module.exports = (clusterPin) => {
    var ipfsPin = {
      Name: clusterPin.name,
      Hash: clusterPin.cid
    }
    return ipfsPin
}