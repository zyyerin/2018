$(function() {

	$('nav li').click(function(e) {
		e.preventDefault();
		$("#container").hide();
    let path = $(this).attr('id');
		$('link[rel=stylesheet][href="assets/styles-project.css"]').remove();

		$('nav li').css('border-bottom', '0.8em solid transparent');
		$(this).css('border-bottom', '0.8em solid #f33');

		$('#container').load('nav/' + path +'.html');
		$("html, body").stop().animate({scrollTop:0}, 500);
		$("#container").fadeIn(1000);
	});

});
