$(function () {
    $('.content').css({
        height: $(window).height()
    });
    $(window).on('resize scroll', function () {
        $('.content').css({
            height: $(window).height()
        });
    })
});
