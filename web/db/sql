var mongoose = require( 'mongoose'  );
mongoose.connect( 'mongodb://127.0.0.1/myDB', function( err ){
    if( !err ){
        console.log( 'DB == connect to mongodb' );
    } else {
        throw err;
    }
} );

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    disabled: Boolean,
    date: Date,
    power: Number    
});

var UserModel = mongoose.model( 'User', UserSchema, 'User' );

function initData( data, db ){
    var query = {};
    for( var key in data ){
        if( db.tree[ key ] ){
            query[ key ] = data[ key ];	
        }
    }
    return query;
}

function addUser( data, cb ){
    data = initData( data, UserSchema );
    ( new UserModel( data )).save( function( err, doc  ){
        cb( err, doc );
    })
}

function findUser( data, cb ){
    data = initData( data, UserSchema );
    UserModel.findOne( data ).exec( function( err, doc ){
        cb( err, doc );
     })
}

module.exports = {
    addUser: addUser,
    findUser: findUser
}

