$("#accordion > div").click(function(){
 
    if(false == $(this).next().is(':visible')) {
        $('#Floors').slideUp(300);
    }
    $(this).next().slideToggle(300);
});

$("#accordion2 > div").click(function(){
 
    if(false == $(this).next().is(':visible')) {
        $('#Floors ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
});
