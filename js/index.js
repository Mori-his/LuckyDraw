$(function () {
    var speed = 10,
        stop = 13000;

    $('.list-group').each(function (index) {
        if (index == 0) {
            $(this).css({
                top: 0
            });
        } else {
            var top = parseInt($('.list-group:eq(' + (index - 1) + ')').css('top')) + $(this).height();
            $(this).css({
                top: top
            });
        }
    });
    var index = 0;
    var isBegin = false;
    $('.start').on('click', function () {
        console.log('index', index);
        if (isBegin) {
            return false;
        }
        isBegin = true;
        $('.list-group').eq(index).css({
            top: parseInt($('.list-group').eq(index).css('top')) - $('.list-group').eq(index).height()
        });
        $('.list-group').eq(index + 1).css({
            top: parseInt($('.list-group').eq(index).css('top')) + $('.list-group').eq(index).height()
        })

        isBegin = false;
        index += 1;

    });
});
