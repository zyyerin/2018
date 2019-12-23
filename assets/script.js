$(function() {

	$('nav li').click(function(e) {
		e.preventDefault();
		$("#container").hide();
    let path = $(this).attr('id');
		$('link[rel=stylesheet][href="assets/styles-project.css"]').remove();

		$('nav li').css('opacity', '0.5');
		$(this).css('opacity', '1');

		$('#container').load('nav/' + path +'.html');
		$("html, body").stop().animate({scrollTop:0}, 500);
		$("#container").fadeIn(1000);
	});

});
