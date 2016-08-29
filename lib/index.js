var Spacebrew = require('./sb-1.4.1').Spacebrew;
var makeAdmin = require('./sb-admin-0.1.5');

Spacebrew.makeAdmin = function () {
	return makeAdmin( Spacebrew );
}

module.exports = Spacebrew;

