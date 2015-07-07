var site = require( '../config/site' );
function center( req, res ){
    res.render( 'user/center.ejs', site.setting( req ) );
}

function info( req, res ){
    res.render( 'user/info.ejs', site.setting( req ) );
}

function blog( req, res ){
    res.render( 'user/blog.ejs', site.setting( req ) );
}


module.exports = {
    center: center,
    info: info,
    blog: blog
}
