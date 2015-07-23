require.config({
	baseUrl: basePath,
	paths: {
		all: 'public/js/all',
		md5: 'core/js/md5'
	}
})

define( ['md5','all'], function( md5 ){
    $( '#registerForm' ).on( 'submit', function(){
        var data = {
            username: $('#username').val(),
            password: md5.hex_md5( $('#password').val() ),
            email: $('#email').val()  
        }
        $.ajax({
            url: '/register?a=1',
            type: 'post',
			  dataType: 'json',
			  data: data,
            success: function( ret ){
                if( ret.code == 0 ){
                        alert( '注册成功' )
                    window.location.href="/login";            
                }   
            }
        });
        return false;
    })
});
