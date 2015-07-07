/**
* 引入依赖模块
*/
var express    = require( 'express' ),
http              = require( 'http' ),
routes          = require( './routes' ),
bodyParser = require( 'body-parser' ),
path             = require( 'path' );

var app        = express(),
server     = http.Server( app );

/**
* 设置
*/
app.set( 'port', process.env.PORT || 3000 ); //服务启动端口
app.set( 'views', __dirname + '/views' ); //视图文件
app.set( 'view engine', 'ejs' ); //页面引擎
app.use( '/', express.static( path.join( __dirname, 'assets' ))); //静态文件路径
app.use( bodyParser.urlencoded({ extended: false }));

routes.all( app );
server.listen( app.get( 'port' ), function(){ //监听服务端口
        console.log( 'root server listening on port ' + app.get( 'port' ));
} );

server.on( 'close', function(){
        console.log( 'close' );    
} );
