
function cookieGet( name, cookie ){
	
	try{
		var cs = cookie.split(';'),
			c,
			item;
		while( c = cs.pop() ){
			item = c.split('=');
			if( item[0].trim() == name ){
			    return item[1];
			}
		}
		return null;
	} catch( e ){
		logInfo.warn( 'getcookie error')
		return false;
	}

}


module.exports = { 
	get: cookieGet
}
