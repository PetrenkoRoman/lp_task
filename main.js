$('form').submit(function(e) {
    var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if (!empty.length) {
        //Если все графы заполнены, то показываем popup
        $(".popup").css("display","grid");

        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
    }
    e.preventDefault();
});


jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".popup"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });
});