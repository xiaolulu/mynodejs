
var redis = require( 'redis' ),
	config = require( '../config/server' ).redis;

var client = redis.createClient( config.port, config.host );

client.on("error", function (err) {
   console.log( 'redis error' )
});

client.on( 'connect', function(){
	console.log( 'redis success' )
});

function hasConnected( cb ){
	if( client.connected ){
		cb();
	} else {
		client = redis.createClient( config.port, config.host );
		client.on( 'connect', function( err, ret ){
			cb();
		})
	}
}

function redisGet( key, cb ){
	hasConnected( function(){
		client.get( key, function( err, reply ){
			if( !err && reply ){
				reply = reply.toString();

			}
			cb( reply );
		});
	});

}

function redisSet( key, value ){
	hasConnected( function(){
		client.set( key, value );
	});

}


module.exports = { 
	get: redisGet,
	set: redisSet
}
