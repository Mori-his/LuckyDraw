$(function () {

    initList();
    var speed = 10,
        stop = 3000;



    var index = 0;
    var isBegin = false;

    $('.start').on('click', function () {
        if (isBegin) {
            return false;
        }
        var numRand = Math.random() * $('.list-group').length;
        isBegin = true;
        var _list = $('.list-group');
        //        var timer = setInterval(function () {
        if (index >= _list.length - 1) {
            index = 0;
            _list.eq(_list.length - 1).animate({
                top: parseInt(_list.eq(_list.length - 1).css('top')) - (_list.eq(index).height() * (index + 1))
            }, {
                speed: speed,
                complete: function () {
                    _list.eq(_list.length - 1).css({
                        top: _list.eq(index).height()
                    });
                }
            });

            _list.eq(index).animate({
                top: 0
            }, speed);


        } else {
            _list.eq(index).animate({
                top: parseInt(_list.eq(index).css('top')) - _list.eq(index).height()
            }, {
                speed: speed,
                complete: function () {
                    _list.eq(index).css({
                        top: _list.eq(index).height()
                    });
                }
            });
            _list.eq(index + 1).animate({
                top: 0
            }, speed);
            index += 1;
        }

        //        }, easeInOutCirc(1000, 50, 120, 130, 140));

        setTimeout(function () {
            clearInterval(timer);
            isBegin = false;
        }, stop);





    });
});

function initList() {
    $('.list-group').each(function (i) {
        var top = parseInt($('.list-group:eq(' + (i) + ')').css('top')) + ($(this).height() * i);
        $(this).animate({
            top: top
        });
    });
}

function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
