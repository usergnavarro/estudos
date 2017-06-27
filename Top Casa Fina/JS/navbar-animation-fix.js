$('#navbar-topcasafina').on('show.bs.collapse', function() {
    $('.topcasafina-banner').css('transform', 'translate(-50%, 10%)');
});

$('#navbar-topcasafina').on('hide.bs.collapse', function() {
    $('.topcasafina-banner').css('transform', 'translate(-50%, -50%)');
});
