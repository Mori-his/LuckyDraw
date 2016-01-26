/**
 * Created by Mori on 2016/1/26.
 */
$(function () {
    initList();
    var duration = 50,//动画执行的毫秒,注意:不要大于步长(speed)的毫秒数
        speed = 80,//步长
        stop = 5000;//停止时间

    var isBegin = false;//阻止连续点击

    function lottery(){
        if (isBegin) {
            return false;
        }
        initList();
        isBegin = true;
        var _list = $('.list-group');

        var numRan = parseInt(Math.random() * _list.length);

        //第一次进来的时候第一个往上移走
        _list.eq(0).animate({
            top: -parseInt(_list.height())
        }, {
            duration: duration,
            complete: function () {
                _list.eq(0).css({
                    top: _list.eq(0).height()
                });
            }
        });
        var timer = setInterval(function () {
            var numRanID = parseInt(Math.random() * _list.length);
            _list.eq(numRanID).animate({
                top: parseInt(_list.eq(numRanID).css('top')) - _list.eq(numRanID).height()
            }, {
                duration: duration,
                complete: function () {
                    _list.eq(numRanID).animate({
                        top: -_list.eq(numRanID).height()
                    }, {
                        duration: duration,
                        complete: function () {
                            _list.eq(numRanID).css({
                                top: _list.eq(numRanID).height()
                            });
                        }
                    });
                }
            });
        }, speed);

        setTimeout(function () {
            clearInterval(timer);
            setTimeout(function(){
                _list.eq(numRan).animate({
                    top: 0
                },{
                    duration: duration
                });
                isBegin = false;
            },speed);
        }, stop);
        return numRan;
    }
    function initList() {
        $('.list-group').each(function (i) {
            if(i === 0){
                $(this).css({
                    top: 0
                });
            }else{
                var top = parseInt($('.list-group:eq(' + (i) + ')').css('top')) + ($(this).height());
                $(this).css({
                    top: top
                });
            }
        });
    }
    //抽取一次
    $('.start').on('click', function(){
        var winners = lottery();
        setTimeout(function(){
            $('#res').html('恭喜：' + $('.list-group').eq(winners).html());
        },stop);
        console.log(winners+1);
    });
});

