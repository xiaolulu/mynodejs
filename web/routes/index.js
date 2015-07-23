
var issue = require( './issue' ),
        user = require( './user' ),
	domain = require( 'domain' ),
        privilege = require( '../config/privilege' ),
        session = require( 'express-session' ),
	gadget = require( '../tool/gadget' );

var Domain = domain.create();

Domain.on( 'error', function( e ){
	console.log( 'error' + e );
})

exports.all = function( app ){
    app.use( session({
		resave: false,
		saveUninitialized: false,
		secret: 'upopen'
	}))
    app.use( function( req, res, next){	
		console.log( req.path );  
		gadget.logInfo.info( req.path );
		try{
			if( privilege[ req.path ] && req.path != '/login' && !req.session.status ){
				console.log( req.session.status );
                if( req.method == 'GET' ){
		            res.redirect('/login');
		            } else {
		                res.send( { code: 1001, msg: 'need you to log in'})    
		            }           
		    } else {	
				Domain.run( function(){
					 next();
				});
		    }
		} catch( e ){
			gadget.logInfo.error( req.path );
			res.redirect( '/' );
		}	
        
    })
    app.get( '/', function( req, res ){
        issue.index( req, res );
    });
    app.get( '/login', function( req, res ){
        issue.login( req, res );
    });
    app.post( '/login', function( req, res ){
        issue.loginUser( req, res );
    });
    app.get('/logout', function( req, res ){
        req.session.status = false;
        res.setHeader("Set-Cookie","username=null;" );
        res.redirect( '/' );
    })
    app.get( '/register', function( req, res ){  
        issue.register( req, res );
    });
    app.post('/register', function( req, res ){
        issue.registerUser( req, res );
    });
    app.get( '/user/center', function( req, res ){
        user.center( req, res );
    });
    app.get( '/user/blog', function( req, res ){
        user.blog( req, res );
    });
    app.get( '/user/info', function( req, res ){
        user.info( req, res );
    });
}
