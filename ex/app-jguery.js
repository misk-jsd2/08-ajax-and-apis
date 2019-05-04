$(document).ready(function(){
    var $header = $('<h1>').text('Hello Misk!');
    $('#header').append($header);

    $('#color').on('change', function(){
        var getColor = $('#color').val();
        getColorAPI(getColor.slice(1));
        console.log(getColor);
    });

});

function getColorAPI(colorHex){
    var url = 'http://www.thecolorapi.com/id';
    $.ajax({
        url: url,
        type: 'GET',
        data: {
            hex: colorHex
        },
        success: function(response) {
            console.log(response);
            setName(response);
        }
    });
}

function setName(colorObject){
    $('#colorName').text(colorObject.name.value);
}