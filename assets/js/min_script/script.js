$(document).ready(function () {
    
    $(".nav-section .logo-box a").remove();
    $(".nav-section .logo-box ").append('<a href="#" class="logo-link">' +
 '   <img src="assets/img/logo.png" style="height: 55px;" class="img-fluid" alt="">' +
    '<div class="text_box">' +
        '<h4 class="title_text">الفهد</h4>' +
        '<span class="sub_text">للمصاعد الكهربائية</span>' +
    '</div>' +
    '</a>'
);
    $(".banner_section .button_box .button_style").remove();
    $(".banner_section .button_box").append('<a href="./contact.html" class="button_style">تواصل معنا</a>');

    
    
    
    
    
    // hide lodding page
    setTimeout(function () {
        $(".loder_page").addClass("hiddinTime");
    }, 4200);
    setTimeout(function () {
        $(".loder_page.sub_page_loder").addClass("hiddinTime");
    }, 1500);

    // scrol-buttom
    $(".scrol-buttom-a").click(function () {

        $("html, body").animate(
            {
                scrollTop: $(".about_secion").offset().top,
            },
            600
        );
    });

    // scroleBotton
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 400) {
            $(".scrollBottn").fadeIn(400);
        } else {
            $(".scrollBottn").fadeOut(400);
        }
    });

    $(".scrollBottn").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".top-header").offset().top,
            },
            600
        );
    });



    // fixed footer
    const footre_high = $(".footer-container").css('height');
    $(".main-container").css("margin-bottom", footre_high);


    // opne_icon
    $(".opne_icon").click(function () {
        $(".nav-box").addClass("opne_menu");
        $("body").addClass("over_lay");
    });
    $(".exit_icon").click(function () {
        $(".nav-box").removeClass("opne_menu");
        $("body").removeClass("over_lay");
    });


    // side_img
    $(".side_img img ").click(function () {
        const img_src = $(this).attr("src");
        $(".product_box_img img").attr("src", img_src);
        $(".product_box_img .containerZoom").css("background-image", "url(" + img_src + ")");
    });

    // grid-box

    $(".grid-box .transform-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".grid-box .transform-item#list-item").click(function () {
        if ($(window).width() < 772) {
            console.log('active');
        } else {
            $(".product_section .product_box_min").removeClass("grid-viwe").addClass("list-viwe");
        }
    });

    $(".grid-box .transform-item#grid-item").click(function () {
        $(".product_section .product_box_min").removeClass("list-viwe").addClass("grid-viwe");
    });

    $(window).resize(function () {
        if ($(window).width() < 772) {
            $(".product_section .product_box_min").removeClass("list-viwe").addClass("grid-viwe");
        }
        if ($(".product_box_min ").hasClass("list-item") || $(window).width() > 772) {
            $(".product_section .product_box_min").removeClass("grid-viwe").addClass("list-viwe");
        }
    });



    const loginClass = '.login_form .form-group input';

    $(loginClass).on("focus", function () {
        $(this).parent().addClass('up');
    });

    $(loginClass).on("blur", function () {
        if ($(this).val()) {
            $(this).addClass('is-valid').parent().addClass('up');
        }
        if (!$(this).val()) {
            $(this).removeClass('is-valid').parent().removeClass('up');
        }
    });
    

    // AOS
    AOS.init({ duration: 600 });

});
