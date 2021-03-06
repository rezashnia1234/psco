$(document).ready(function () {
    $('.transition').animate({
        opacity: 1,
    }, 500, function () {
    });
});

$('.target-point').on('click', function () {
    var target = $(this).attr('data-target');
    var classTarget = $(this).attr('data-class');
    var floorTittle = $(this).attr('title');

    $('.floor-title').text(floorTittle);

    $('#base-map').fadeOut();
    $('#' + target).addClass('active-map');
    $('#' + target).animate({
        opacity: 1,
    }, 500, function () {
        showNavigation();
        $('#' + target).removeClass('hidden');
        $('#' + target).find('.pin').animate({
            opacity: 1,
            top: 0,
        }, 500, function () {

        });
    });
});

$('#back-master').on('click', function () {
    hideNavigation();
    $('.floor-title').text('');
    var classTarget = $('.active-map').attr('data-class');
    //$('.' + classTarget).addClass('none');
    $('.active-map').find('.pin').animate({
        opacity: 0,
        top: -10,
    }, 500, function () {
        $('.active-map').animate({
            opacity: 0,
        }, 1000, function () {
            $('.active-map').addClass('hidden');
            $('.active-map').removeClass('active-map');
            $('#base-map').fadeIn();

        });
    });
});

$('.show-info').on('click', function () {

    var title = $(this).attr('data-title');
    var description = $(this).attr('data-description');
    var imgBack = $(this).attr('data-image-back');
    var imgMap = $(this).attr('data-image-map');
    var link = $(this).attr('data-link');
    var link2 = $(this).attr('data-link2');
    var link_title = $(this).attr('data-link-title');
    var link_title2 = $(this).attr('data-link-title2');

    $('.info .description .text .title').text(title);
    $('.info .description .text p').html(description);
	setTimeout(function () {
		$('.info .description .text').scrollTop(0);
	}, 10);
    $('.info .img-back img').attr('src', 'img/back/' + imgBack);
    $('.info .img-map img').attr('src', 'img/back/' + imgMap);
    if (link && link != "") {
        $('.info .description .btn-pano').css('display', 'block');
        $('.info .description .btn-pano').show();
        $('.info .description .btn-pano a').attr('onclick', link);
		if (link_title && link_title != "")
			$('.info .description .btn-pano a').html(link_title + '<img src="img/play.png"/>');
		else
			$('.info .description .btn-pano a').html('Panaroma<img src="img/play.png"/>');
    }
    else {
        $('.info .description .btn-pano').css('display', 'none');
    }

    if (link2 && link2 != "") {
        $('.info .description .btn-pano2').css('display', 'block');
        $('.info .description .btn-pano2').show();
        $('.info .description .btn-pano2 a').attr('onclick', link2);
		if (link_title2 && link_title2 != "")
			$('.info .description .btn-pano2 a').html(link_title2 + '<img src="img/play.png"/>');
		else
			$('.info .description .btn-pano2 a').html('Panaroma 2<img src="img/play.png"/>');
    }
    else {
        $('.info .description .btn-pano2').css('display', 'none');
    }
    // $('.info .description .btn-pano a').attr('onclick', "alert();");

    $('.info').css('opacity', '0');
    $('.info').css('display', 'block');
    $('.info .description').animate({
        opacity: 1,
        bottom: 0,
    }, 1000, function () {

    });

    $('.info').animate({
        opacity: 1,
    }, 1000, function () {
    });
});

$('#btn-close-info').on('click', function () {

    $('.info').animate({
        opacity: 0,
    }, 1000, function () {
    });

    $('.info .description').animate({
        opacity: 0,
        bottom: '-10em',
    }, 1000, function () {
        $('.info .description .text .title').text('');
        $('.info .description .text p').text('');
        $('.info .img-back img').attr('src', '');
        $('.info .img-map img').attr('src', '');
        $('.info .description .btn-pano a').attr('onclick', '');
        $('.info .description .btn-pano2 a').attr('onclick', '');

        $('.info').css('display', 'none');
    });


});


function showNavigation() {
	$('.navigation.back-btn').removeClass("hideNavigation");
    $('.navigation.back-btn').animate({
        opacity: 1,
    }, 500, function () {
    });
}

function hideNavigation() {
	$('.navigation.back-btn').addClass("hideNavigation");
    $('.navigation.back-btn').animate({
        opacity: 0,
    }, 500, function () {
    });
}