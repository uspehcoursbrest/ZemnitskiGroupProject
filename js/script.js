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