
require.config({
	baseUrl: basePath,
	paths: {
		all: 'public/js/all',
		md5: 'core/js/md5'
	}
})

define( ['md5', 'all'], function( md5 ){
    $( '#loginForm' ).on( 'submit', function(){
        var data = {
            username: $('#username').val(),
            password: md5.hex_md5( $('#password').val() )
        }
        $.ajax({
            url: '/login',
            type: 'post',
			  dataType: 'json',
			  data: data,
            success: function( ret ){
                    if( ret.code == 0){
                      $.cookies.set( 'username', data.username );
                        window.location.href = '/user/center';
                    } 
            }
        });
        return false;
    })
});
