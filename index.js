var cache = {};

function Memory (collection) {
  this.collection = collection;

  if (cache[collection] == undefined ) {
    cache[collection] = {};
  }
};

Memory.prototype.insert = function (keyIndex, value) {
  cache[this.collection][keyIndex] = value;
};

Memory.prototype.remove = function (keyIndex) {
  delete cache[this.collection][keyIndex];
};

Memory.prototype.clear = function () {
  cache = {};
};

Memory.prototype.get = function (keyIndex) {
  return cache[this.collection][keyIndex];
};

Memory.prototype.find = function (requisites) {
  if (!requisites) {
    return cache[this.collection];
  };

  var items = [];
  var collection = cache[this.collection];

  for (i=0; i<Object.keys(cache[this.collection]).length; i++) {
    var item = cache[this.collection][Object.keys(cache[this.collection])[i]];

    for (j=0; j<Object.keys(item).length; j++) {
      var key = Object.keys(item)[j];
      
      for (h=0; h<Object.keys(requisites).length; h++) {
        var requisiteKey = Object.keys(requisites)[h];
        if (key == requisiteKey) {
          if (requisites[requisiteKey] == item[requisiteKey]) {
            itemFound = item;
          }
          else {
            itemFound = null;
          };
        };
      };
    };

    if (itemFound) {
      items.push(itemFound);
    };
  };

  return items
};

exports.Memory = Memory;