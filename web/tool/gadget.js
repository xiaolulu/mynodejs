var log4js = require( 'log4js' );

var logConfig = {
	"appenders":[
		{"type": "console","category":"console"},
		{
			"type": "dateFile",
			"filename":"./log/",
			"pattern":"yyyyMMdd.log",
			"absolute":true,
			"alwaysIncludePattern":true,
			"category":"logInfo"
		}
	],
	"levels":{"logInfo":"DEBUG"}
}

log4js.configure( logConfig );
var logInfo = log4js.getLogger('logInfo');

module.exports = {
	logInfo: logInfo
}
