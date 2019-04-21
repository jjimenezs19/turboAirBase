// // Basic functions
//
// function activeTabs() {
//     $(document).on('click', 'a[role="tab"]', function () {
//         $(this).removeClass('active');
//         $('.next-mobile').removeClass('active-state');
//         if ($(window).scrollTop() > 10) {
//             $('html, body').animate({scrollTop: 0}, 800);
//         }
//     });
// }
//
function closeMenuMobile(){
    $('.menu-sidebar').removeClass('active');
}
//
function openMenuMobile(){
    $('.menu-sidebar').addClass('active');
}
//
$(document).on('click', '.open-menu-btn', function () {
    $('body').addClass('modal-open');
    openMenuMobile();
});
$(document).on('click', '.close-menu-btn', function () {
    $('body').removeClass('modal-open');
    closeMenuMobile();
});
$(document).on('click', '.menu-link', function () {
    $('body').removeClass('modal-open');
    closeMenuMobile();
});

//Show Brands Popup
function showBrandsPopup(){
    var selector = $('.brands-container');
    selector.css('display', 'block');
    setTimeout(function () {
        selector.css('opacity', '1');
    }, 500);
}
function hideBrandsPopup(){
    var selector = $('.brands-container');
    selector.css('opacity', '0');
    setTimeout(function () {
        selector.css('display', 'none');
    }, 500);
}
$(document).on('click', '.show-brands', function () {
    showBrandsPopup();
});
$(document).on('click', '.hide-brands', function () {
    hideBrandsPopup();
});




//
// $(document).on('click', '.open-img-btn', function () {
//     $('body').addClass('modal-open');
//     var target = $(this).data('slide');
//     $('.slide-'+target+'-bg').addClass('active');
// });
//
// $(document).on('click', '.close-image-btn', function () {
//     $('body').removeClass('modal-open');
//     var target = $(this).data('slide');
//     $('.slide-'+target+'-bg').removeClass('active');
// });
//
// $(document).on('click', '.modal-arrow-down', function () {
//     var target = $(this).data('modal');
//     var next = $(this).data('next');
//     $('.modal-'+target).modal('hide');
//     $('.modal-'+next).modal('show');
//     setTimeout(function () {
//         $('.about-us').addClass('modal-open');
//     },500);
// });
//
// $(document).on('click', '.modal-arrow-up', function () {
//     var target = $(this).data('modal');
//     var next = $(this).data('next');
//     $('.modal-'+target).modal('hide');
//     $('.modal-'+next).modal('show');
//     setTimeout(function () {
//         $('.about-us').addClass('modal-open');
//     },500);
// });
//
// $(".show-down-section").on('click', function(event) {
//     if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
//         var hash = this.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800, function(){
//             window.location.hash = hash;
//         });
//     }
// });
// $(".show-down-section-tab").on('click', function(event) {
//
//     var hash = $(this).data('link');
//     setTimeout(function () {
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800, function(){
//             window.location.hash = hash;
//         });
//     },500)
//
//
// });
// var scrollFuncActive = $('#js-function-scroll');
// if(scrollFuncActive.length){
//
//     //mobile
//     $(window).on('touchmove', function () {
//         if($(window).scrollTop() + $(window).height() == $(document).height()) {
//             $('.next-mobile').addClass('active-state');
//         }else{
//             $('.next-mobile').removeClass('active-state');
//         }
//     });
//     //desktop
//     $(window).scroll(function() {
//         if($(window).scrollTop() + $(window).height() == $(document).height()) {
//             $('.next-mobile').addClass('active-state');
//         }else{
//             $('.next-mobile').removeClass('active-state');
//         }
//     });
//
// //Navigation fixed
// // When the user scrolls the page, execute myFunction
//     window.onscroll = function() {myFunction()};
//
// // Get the header
//     var header = document.getElementById("sub-header-p");
//     var box = document.getElementById("ecosystem");
//
// // Get the offset position of the navbar
//     var sticky = box.offsetTop;
//
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//     function myFunction() {
//         if (window.pageYOffset > sticky) {
//             header.classList.add("sticky");
//         } else {
//             header.classList.remove("sticky");
//         }
//     }
// }
// activeTabs();