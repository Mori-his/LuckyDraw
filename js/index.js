$(function () {

    initList();
    var duration = 70,
        speed = 100,
        stop = 5000;



    var index = 0;
    var isBegin = false;

    $('.start').on('click', function () {
        if (isBegin) {
            return false;
        }
        isBegin = true;
        var _list = $('.list-group');
        stop = _list.length * speed * 10;
        var numRan = parseInt((Math.random() + .1) * _list.length);
        console.log(numRan);
        stop += numRan * speed;
        var timer = setInterval(function () {
            if (index >= _list.length - 1) {
                index = 0;
                _list.eq(_list.length - 1).animate({
                    top: parseInt(_list.eq(_list.length - 1).css('top')) - (_list.eq(index).height() * (index + 1))
                }, {
                    duration: duration,
                    complete: function () {
                        _list.eq(_list.length - 1).css({
                            top: _list.eq(index).height()
                        });
                    }
                });

                _list.eq(index).animate({
                    top: 0
                }, {
                    duration: duration
                });

            } else {
                _list.eq(index).animate({
                    top: parseInt(_list.eq(index).css('top')) - _list.eq(index).height()
                }, {
                    duration: duration,
                    complete: function () {
                        _list.eq(index).css({
                            top: _list.eq(index).height()
                        });
                    }
                });
                _list.eq(index + 1).animate({
                    top: 0
                },{
                    duration: duration,
                    complete: function(){
                        //isBegin = false;
                        index += 1;
                    }
                });

            }

        }, speed);

        setTimeout(function () {
            clearInterval(timer);
            isBegin = false;
            index = 0;
        }, stop);





    });
});

function initList() {
    $('.list-group').each(function (i) {
        var top = parseInt($('.list-group:eq(' + (i) + ')').css('top')) + ($(this).height() * i);
        $(this).css({
            top: top
        });
    });
}

function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
