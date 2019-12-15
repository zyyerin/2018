$(function() {

	$('nav li').click(function(e) {
		e.preventDefault();
		$("#container").hide();
    let path = $(this).attr('id');
		$('link[rel=stylesheet][href="assets/styles-project.css"]').remove();

		$('nav li').css('font-weight', '400');
		$(this).css('font-weight', '700');

		$('#container').load('nav/' + path +'.html');
		$("html, body").stop().animate({scrollTop:0}, 500);
		$("#container").fadeIn(1000);
	});

});
