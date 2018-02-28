var fs = require('fs');
var path = require('path');
module.exports = function(source, map) {
    this.cacheable && this.cacheable();
    return source;
};