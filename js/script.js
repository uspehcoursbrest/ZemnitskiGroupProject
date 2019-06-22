$(document).ready(function () {
    $('.card').mouseover(function () {
       $(this).find('.thumbnail').stop().fadeIn();
    });

    $('.card').mouseout(function () {
        $(this).find('.thumbnail').stop().fadeOut();
    });

    var accord = $('.accordion');
    accord.find('.title:not(.active)').siblings('div').slideUp();

    accord.find('.title').on('click',function () {
        $(this).siblings('div').stop().slideToggle(500);

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });

    var btnUp = $('.up');
    btnUp.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            btnUp.fadeIn();
        } else {
            btnUp.fadeOut();
        }
    });

    btnUp.click(function () {
        $('body,html').animate({
            scrollTop: 0}, 500);
        return false;
    });

});



window.onload = function () {
    var button = document.querySelectorAll(".card .buy button");

    button.forEach(function (item) {
        item.addEventListener("click", function (event) {
            alert("Товар добавлен в корзину");
        });
    });

};


// $(document).ready(function () {
//     $('.card').mouseover(function () {
//         $(this).find('.thumbnail').stop().fadeIn()
//     });

//     $('.card').mouseout(function () {
//         $(this).find('.thumbnail').stop().fadeOut()
//     });

//     var accord = $('.accordion');

//     accord.find('.title:not(.active)').siblings('div').slideUp();

//     accord.find('.title').on('click', function () {
//         $(this).siblings('div').stop().slideToggle(500);

//         if ($(this).hasClass('active')){
//             $(this).removeClass('active');
//         }
//         else {
//             $(this).addClass('active');
//         }
//     })

//     //Слайдер
//     $('.mainSlider').owlCarousel({
//         items: 1,
//         dotsContainer: '#customDots'
//     })

//     // Селектрик
//     $('select').selectric();

//     // Вкладки
//     $("#tabs").tabs({
//         active: 0
//     });
// })