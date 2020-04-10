$('form').submit(function(e) {
    var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if (!empty.length) {
        $(".popup").css("display","grid");
        $('form input').not(':button, :submit').val('');
    }
    e.preventDefault();
});


jQuery(function($){
    $(document).mouseup(function (e){ 
        var div = $(".popup"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            div.hide(); 
        }
    });
});
