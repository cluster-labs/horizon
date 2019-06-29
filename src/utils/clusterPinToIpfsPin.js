module.exports = clusterPin => {
    let ipfsPin = clusterPin
    ipfsPin.Name = clusterPin.name
    ipfsPin.Hash = clusterPin.cid
    delete ipfsPin.name
    delete ipfsPin.cid
    return ipfsPin
}