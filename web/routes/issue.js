
var site = require( '../config/site' ),
        user = require( '../controls/user' );

function index( req, res ){
    res.render( 'issue/index.ejs', site.setting( req, '/issue/index', '/index' ) );
}

function register( req, res ){
	console.log( 'reqpath');
    res.render( 'issue/register.ejs', site.setting( req, '/issue' ) );
}

function registerUser( req, res ){
    user.addUser( req, res );
}

function login( req, res ){
    res.render( 'issue/login.ejs', site.setting( req, '/issue' ) );
}

function loginUser( req, res ){
    user.findUser( req, res );
}

module.exports = {
    register: register,
    index: index,
    registerUser: registerUser,
    login: login,
    loginUser: loginUser
}
