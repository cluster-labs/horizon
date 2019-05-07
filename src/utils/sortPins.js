module.exports = pins => {
  var sortedPins = pins.sort((a, b) => {
    // Directories take priority, then name, then fallback to CID
    var sortResult = 0;
    var areSameType = a.isDir == b.isDir;
    if (!areSameType) {
      sortResult = a.isDir ? -1 : 1;
    } else if (a.Name != b.Name) {
      sortResult = a.Name > b.Name ? 1 : -1;
    } else {
      sortResult = a.Hash > b.Hash ? 1 : -1;  // assumes CIDs never equal
    }
    return sortResult;
  });
  return sortedPins;
}

