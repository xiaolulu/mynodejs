var db = require( '../db/sql' ),
	crypto = require( 'crypto' );
var md5 = function(data) { 
	
    return crypto.createHash('md5').update(data).digest('hex').toLowerCase();  

} 
function addUser( req, res ){
    var data = req.body;
	data.password = md5( data.password );
    data.date = new Date();
    data.disabled = true;
    db.addUser( data, function( err, doc ){
        if( !err ){
            res.send( { code: 0, msg: 'add User Success', data: doc } );
        }
    })
}

function findUser( req, res ){
    var data = req.body;
	data.password = md5( data.password );
    db.findUser( data, function( err, doc ){
        if( !err ){
               if( doc ){
                    req.session.status = true;        
                }
            res.send(  { code: 0, msg: 'find User Success', data: doc }  );    
        }
    })
}

module.exports = {
    addUser: addUser,
    findUser: findUser
}
