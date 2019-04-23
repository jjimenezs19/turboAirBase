/*
 DESCRIPTION: Custom Methods JS
 VERSION: 1.0
 AUTHOR: Jason Jimenez.

 ##TABLE OF CONTENT##

 1.Brands PopUp
 2.Mobile Menu
 3.Back to Top Btn
 4.Scroll to Section
 5.On Scroll put a bg on header
 6.
 7.
 8.
 9.
 */

var custom_js_theme = (function () {
    /*(1) Brands PopUp
     =================================================== */
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

    /*(2) Mobile Menu
    =================================================== */
    function closeMenuMobile(){
        $('.menu-sidebar').removeClass('active');
    }
    function openMenuMobile(){
        $('.menu-sidebar').addClass('active');
    }

    /*(3) Back to Top Btn
        =================================================== */
    function backToTopBtn () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        $('.scrollToTop').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    }

    /*(4) Scroll to Section
     =================================================== */
    function goToSection(hash) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }

    /*(5) On Scroll put a bg on header
        =================================================== */
    function headerFixedBg(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#site-header").addClass('bg-dark');
            } else {
                $("#site-header").removeClass('bg-dark');
            }
        });
    }

    return {
        showBrandsPopup: showBrandsPopup,
        hideBrandsPopup: hideBrandsPopup,
        closeMenuMobile: closeMenuMobile,
        openMenuMobile: openMenuMobile,
        backToTopBtn: backToTopBtn,
        goToSection:goToSection,
        headerFixedBg:headerFixedBg
    }
})();


/*Triggers*/
$(document).on('click', '.show-brands', function () {
    custom_js_theme.showBrandsPopup();
});
$(document).on('click', '.hide-brands', function () {
    custom_js_theme.hideBrandsPopup();
});

$(document).on('click', '.open-menu-btn', function () {
    $('body').addClass('modal-open');
    custom_js_theme.openMenuMobile();
});
$(document).on('click', '.close-menu-btn', function () {
    $('body').removeClass('modal-open');
    custom_js_theme.closeMenuMobile();
});
$(document).on('click', '.menu-link', function () {
    $('body').removeClass('modal-open');
    custom_js_theme.closeMenuMobile();
});
$(document).on('click', '.go-to-section', function () {
    var hash = $(this).data('link');
    custom_js_theme.goToSection(hash);
});

/*Doc Ready*/
$(document).ready(function () {
    custom_js_theme.backToTopBtn();
    custom_js_theme.headerFixedBg();
});