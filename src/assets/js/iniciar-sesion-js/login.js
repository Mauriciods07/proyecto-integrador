$(function(){
    $('#errDiv').hide();
    $('#logInfrm').submin(function(e){
        e.preventDefault();
        $.post("mod*****", $('#logInfrm').serialize(),function(data){
            $('#errDiv').show('slow');
            if(data)
                $('#errDiv').text('Sesión iniciada');
            else
            $('#errDiv').text('Verifique su información');
        }, "json");

    });
});