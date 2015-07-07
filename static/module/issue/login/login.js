
require.config({
	baseUrl: basePath,
	paths: {
		all: 'public/js/all',
	}
})

define( ['all'], function(){
    $( '#loginForm' ).on( 'submit', function(){
        var data = {
            username: $('#username').val(),
            password: $('#password').val()
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
