var db = require( '../db/sql' );

function addUser( req, res ){
    var data = req.body;
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
