(function ($) {

    $(window).ready(function () {}); // End of Windows Load

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 768px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    $('#hamburger').click(function () {
        $(this).toggleClass("active");
    });

    $('.safety-slide').slick({
        infinite: true,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: true, // Adds the dots on the bottom
        draggable: true,

        responsive: [{
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 600,
                settings: {}
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    adaptiveHeight: false
                }
            }

        ]

    });

    $('.exterior-gallery').slick({
        infinite: true,
        slidesToShow: 4, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: false, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom

        responsive: [{
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }

        ]

    });

    $('.interior-gallery').slick({
        infinite: true,
        slidesToShow: 4, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: false, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom

        responsive: [{
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }

        ]

    });

    var waypoint = new Waypoint({
        element: $('#swipe-hand'),
        handler: function (direction) {
            setTimeout(() => {
                $(".swipe-guide-overlay").css('opacity', 0);
            }, 7000);
            this.destroy();
        }
    })

    $(".btn-red").click(function () {
        $('#change-color').attr("src", "img/almera-red.png");
        $('#color-name').text("Radiant Red - M118");
        $('#color-name').addClass("new-label");
        $(this).addClass("active");
        $('#gold-btn,#grey-btn,#white-btn,#dusty-btn,#black-btn').removeClass("active");
        // $('#skewed-bg').addClass("red");
        // $('#skewed-bg').removeClass("gold grey white dusty black");
    });

    $(".btn-gold").click(function () {
        $('#change-color').attr("src", "img/almera-orange.png");
        $('#color-name').text("Monarch Orange - M119").addClass("new-label");
        $(this).addClass("active");
        $('#red-btn,#grey-btn,#white-btn,#dusty-btn,#black-btn').removeClass("active");
        // $('#skewed-bg').addClass("gold");
        // $('#skewed-bg').removeClass("red grey white dusty black");
    });

    $(".btn-grey").click(function () {
        $('#change-color').attr("src", "img/almera-grey.png");
        $('#color-name').text("Dark Metal Grey - M120").addClass("new-label");
        $(this).addClass("active");
        $('#red-btn,#gold-btn,#white-btn,#dusty-btn,#black-btn').removeClass("active");
        // $('#skewed-bg').addClass("grey");
        // $('#skewed-bg').removeClass("red gold white dusty black");
    });

    $(".btn-white").click(function () {
        $('#change-color').attr("src", "img/almera-white.png");
        $('#color-name').text("Brilliant White - S205");
        $('#color-name').removeClass("new-label");
        $(this).addClass("active");
        $('#red-btn,#gold-btn,#grey-btn,#dusty-btn,#black-btn').removeClass("active");
        // $('#skewed-bg').addClass("white");
        // $('#skewed-bg').removeClass("red gold grey dusty black");
    });

    $(".btn-dusty").click(function () {
        $('#change-color').attr("src", "img/almera-silver.png");
        $('#color-name').text("Tungsten Silver - M069");
        $('#color-name').removeClass("new-label");
        $(this).addClass("active");
        $('#red-btn,#gold-btn,#grey-btn,#white-btn,#black-btn').removeClass("active");
        // $('#skewed-bg').addClass("dusty");
        // $('#skewed-bg').removeClass("red gold grey white black");
    });

    $(".btn-black").click(function () {
        $('#change-color').attr("src", "img/almera-black.png");
        $('#color-name').text("Diamond Black - M091");
        $('#color-name').removeClass("new-label");
        $(this).addClass("active");
        $('#red-btn,#gold-btn,#grey-btn,#white-btn,#dusty-btn').removeClass("active");
        // $('#skewed-bg').addClass("black");
        // $('#skewed-bg').removeClass("red gold grey white dusty");
    });

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() + (window.innerHeight * .8) > $('#performance').offset().top) {
    //         $(".cta-mobile").css("bottom", "0px");
    //     } else if ($(this).scrollTop() + (window.innerHeight * .8) > $('#book-test-drive').offset().top) {
    //         $(".cta-mobile").css("bottom", "-69px");
    //         // $(".test-drive-cta, .download-cta").addClass("show-half");
    //         // } else if ($(this).scrollTop() < 6500) {
    //         //     $(".test-drive-cta, .download-cta").removeClass("show-half");
    //     }
    // });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150 && $(this).scrollTop() < 6000) {
            $('.cta-mobile').css('bottom', '0');
        } else {
            $('.cta-mobile').css('bottom', '-60px');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() + (window.innerHeight * .8) > $('#book-test-drive').offset().top) {
            // if ($(this).scrollTop() > 600 && $(this).scrollTop() < 6500) {
            $(".test-drive-cta, .download-cta").removeClass("show");
            $(".test-drive-cta, .download-cta").removeClass("show-half");
        } else if ($(this).scrollTop() + (window.innerHeight * .8) > $('#safety').offset().top) {
            $(".test-drive-cta, .download-cta").addClass("show-half");
            $(".test-drive-cta, .download-cta").removeClass("show");
            // $(".test-drive-cta, .download-cta").addClass("show-half");
            // } else if ($(this).scrollTop() < 6500) {
            //     $(".test-drive-cta, .download-cta").removeClass("show-half");
        } else if ($(this).scrollTop() + (window.innerHeight * .8) > $('#performance').offset().top) {
            $(".test-drive-cta, .download-cta").addClass("show");
            $(".test-drive-cta, .download-cta").removeClass("show-half");
        } else {
            $(".test-drive-cta, .download-cta").removeClass("show");
            $(".test-drive-cta, .download-cta").removeClass("show-half");
        }
    });
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() + (window.innerHeight * .8) > $('#book-test-drive').offset().top ) {
    //     // if ($(this).scrollTop() > 600 && $(this).scrollTop() < 6500) {
    //         $(".test-drive-cta, .download-cta").removeClass("show");
    //         $(".test-drive-cta, .download-cta").removeClass("show-half");
    //     } else if ($(this).scrollTop() + (window.innerHeight * .8) > $('#safety').offset().top) {
    //         $(".test-drive-cta, .download-cta").addClass("show-half");
    //         $(".test-drive-cta, .download-cta").removeClass("show");
    //         // $(".test-drive-cta, .download-cta").addClass("show-half");
    //     // } else if ($(this).scrollTop() < 6500) {
    //     //     $(".test-drive-cta, .download-cta").removeClass("show-half");
    //     } else if($(this).scrollTop() + (window.innerHeight * .8) > $('#performance').offset().top) {
    //         $(".test-drive-cta, .download-cta").addClass("show");
    //         $(".test-drive-cta, .download-cta").removeClass("show-half");
    //     } else {
    //         $(".test-drive-cta, .download-cta").removeClass("show");
    //         $(".test-drive-cta, .download-cta").removeClass("show-half");
    //     }
    // });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scrollX >= 10) {
            //console.log('a');
            $("#swipe-hand").addClass("remove-hand");
        } else {
            //console.log('a');
            $(".btt").removeClass("remove-hand");
        }
    });

    $('#location-bottom').change(function () {
        if ($(this).val() == 'Johor') {
            $('#kedah-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#johor-bottom').show();
        } else if ($(this).val() == 'Kedah') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#kedah-bottom').show();
        } else if ($(this).val() == 'Kelantan') {
            $('#johor-bottom,#kedah-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#kelantan-bottom').show();
        } else if ($(this).val() == 'Wilayah Persekutuan') {
            $('#johor-bottom,#kelantan-bottom,#kedah-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#wilayahpersekutuan-bottom').show();
        } else if ($(this).val() == 'Melaka') {
            $('#johor-bottom,#kedah-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#melaka-bottom').show();
        } else if ($(this).val() == 'Negeri Sembilan') {
            $('#johor-bottom,#kelantan-bottom,#kedah-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#negerisembilan-bottom').show();
        } else if ($(this).val() == 'Pahang') {
            $('#johor-bottom,#kedah-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#pahang-bottom').show();
        } else if ($(this).val() == 'Perak') {
            $('#johor-bottom,#kedah-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#perak-bottom').show();
        } else if ($(this).val() == 'Perlis') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#kedah-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#perlis-bottom').show();
        } else if ($(this).val() == 'Pulau Pinang') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#kedah-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
            $('#penang-bottom').show();
        } else if ($(this).val() == 'Sabah') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#selangor-bottom,#sarawak-bottom,#kedah-bottom,#terengganu-bottom').hide();
            $('#sabah-bottom').show();
        } else if ($(this).val() == 'Sarawak') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#selangor-bottom,#kedah-bottom,#terengganu-bottom').hide();
            $('#sarawak-bottom').show();
        } else if ($(this).val() == 'Selangor') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#kedah-bottom,#terengganu-bottom').hide();
            $('#selangor-bottom').show();
        } else if ($(this).val() == 'Terengganu') {
            $('#johor-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#kedah-bottom').hide();
            $('#terengganu-bottom').show();
        } else if ($(this).val() == '') {
            $('#johor-bottom,#kedah-bottom,#kelantan-bottom,#wilayahpersekutuan-bottom,#labuan-bottom,#melaka-bottom,#negerisembilan-bottom,#pahang-bottom,#perak-bottom,#perlis-bottom,#penang-bottom,#sabah-bottom,#sarawak-bottom,#selangor-bottom,#terengganu-bottom').hide();
        }
    });
    $('#location-top').change(function () {
        if ($(this).val() == 'Johor') {
            $('#kedah-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#johor-top').show();
        } else if ($(this).val() == 'Kedah') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#kedah-top').show();
        } else if ($(this).val() == 'Kelantan') {
            $('#johor-top,#kedah-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#kelantan-top').show();
        } else if ($(this).val() == 'Wilayah Persekutuan') {
            $('#johor-top,#kelantan-top,#kedah-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#wilayahpersekutuan-top').show();
        } else if ($(this).val() == 'Melaka') {
            $('#johor-top,#kedah-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#melaka-top').show();
        } else if ($(this).val() == 'Negeri Sembilan') {
            $('#johor-top,#kelantan-top,#kedah-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#negerisembilan-top').show();
        } else if ($(this).val() == 'Pahang') {
            $('#johor-top,#kedah-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#pahang-top').show();
        } else if ($(this).val() == 'Perak') {
            $('#johor-top,#kedah-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#perak-top').show();
        } else if ($(this).val() == 'Perlis') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#kedah-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#perlis-top').show();
        } else if ($(this).val() == 'Pulau Pinang') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#kedah-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
            $('#penang-top').show();
        } else if ($(this).val() == 'Sabah') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#selangor-top,#sarawak-top,#kedah-top,#terengganu-top').hide();
            $('#sabah-top').show();
        } else if ($(this).val() == 'Sarawak') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#selangor-top,#kedah-top,#terengganu-top').hide();
            $('#sarawak-top').show();
        } else if ($(this).val() == 'Selangor') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#kedah-top,#terengganu-top').hide();
            $('#selangor-top').show();
        } else if ($(this).val() == 'Terengganu') {
            $('#johor-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#kedah-top').hide();
            $('#terengganu-top').show();
        } else if ($(this).val() == '') {
            $('#johor-top,#kedah-top,#kelantan-top,#wilayahpersekutuan-top,#labuan-top,#melaka-top,#negerisembilan-top,#pahang-top,#perak-top,#perlis-top,#penang-top,#sabah-top,#sarawak-top,#selangor-top,#terengganu-top').hide();
        }
    });

    $("#swipe-hand").on("touchmove", function (e) {
        $(this).addClass('remove-hand');
    });

    $('form').find('select').each(function () {
        $(this).change(function () {
            $(this).attr('value', $(this).val());
        });
    });

    $('[name=number]').keypress(function (event) {
        if (event.which > 47 && event.which < 58) {} else {
            event.preventDefault();
        }
    });

    $('form').submit(function (e) {
        e.preventDefault();
        $('form').find('button').attr('disabled', true);
        $('.err-box').html('');
        var hasError = false;

        var NameInput = $('[name=name]');
        var EmailInput = $('[name=email]');
        var MobileExtInput = $('[name=phoneExt]');
        var MobileNumInput = $('[name=number]');
        var LocationInput = $('[name=location]');
        var ShowroomInput = $($('[name=showroom]').not('[value=""]'));
        var PremiseInput = $('[name=checked-premises]');
        var ReqFieldsInput = $('[name=checked-etcm], [name=checked-pdpa]');

        var NameErrMessage = $('.name-err');
        var EmailErrMessage = $('.email-err');
        var MobileErrMessage = $('.mobile-err');
        var LocationErrMessage = $('.location-err');
        var ShowroomErrMessage = $('.showroom-err');
        var ReqFieldsErrMessage = $('.reqfield-err');
        var PremiseErrMessage = $('.premise-err');

        var Name = $('[name=name]')[0].value || $('[name=name]')[1].value;
        var Email = $('[name=email]')[0].value || $('[name=email]')[1].value;
        var Mobile = '' + $('[name=number]')[0].value || '' + $('[name=number]')[1].value;
        var Location = $('[name=location]')[0].value || $('[name=location]')[1].value;
        var Showroom = $($('[name=showroom]').not('[value=""]'))[0].value || $($('[name=showroom]').not('[value=""]'))[1].value;
        var reqFields = $($('[name=checked-etcm]')[0]).prop('checked') && $($('[name=checked-pdpa]')[0]).prop('checked') || $($('[name=checked-etcm]')[1]).prop('checked') && $($('[name=checked-pdpa]')[1]).prop('checked');

        var premise = $('[name=checked-premises]:checked').val();

        NameErrMessage.html('');
        EmailErrMessage.html('');
        MobileErrMessage.html('');
        LocationErrMessage.html('');
        ShowroomErrMessage.html('');
        ReqFieldsErrMessage.html('');
        PremiseErrMessage.html('');

        if (Name.match(/[!\d]/g)) {
            hasError = true;
            NameErrMessage.html('Invalid name.');
        }

        if (Name == '') {
            hasError = true;
            NameErrMessage.html('Please fill in your name.');
        }

        if (!Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i)) {
            hasError = true;
            EmailErrMessage.html('Invalid email address.');
        }

        if (Email == '') {
            hasError = true;
            EmailErrMessage.html('Please fill in your email.');
        }

        if (!Mobile.match(/^[0-9]{7,8}$/g)) {
            hasError = true;
            MobileErrMessage.html('' + (MobileExtInput.val() == '' ? 'Please include a mobile extension' : '') + (MobileExtInput.val() == '' && (MobileNumInput.val().match(/[a-zA-Z]/g) || MobileNumInput.val().length < 7 || MobileNumInput.val().length > 8) ? ' and ' : '') + (MobileNumInput.val().match(/[a-zA-Z]/g) ? 'wrong contact number format' : MobileNumInput.val().length < 7 || MobileNumInput.val().length > 8 ? 'Mobile number should be at least 7-8 digits' : ''));
        }

        if (Location == '') {
            hasError = true;
            LocationErrMessage.html('Please choose your location.');
        }

        if (Showroom == '') {
            hasError = true;
            ShowroomErrMessage.html('Please choose a showroom.');
        }

        if (!reqFields) {
            hasError = true;
            ReqFieldsErrMessage.text('Please check this box to confirm your acknowledgment and proceed.');
        }

        if (!premise) {
            hasError = true;
            PremiseErrMessage.text('Please select where you`d like to test-drive your vehicle.');
        }

        Mobile = $('[name=number]')[0].value ? '' + $('[name=phoneExt]')[0].value + $('[name=number]')[0].value : '' + $('[name=phoneExt]')[1].value + $('[name=number]')[1].value;

        if (hasError) return $('form').find('button').removeAttr('disabled', true);

        var formData = new FormData();

        formData.append('name', Name);
        formData.append('email', Email);
        formData.append('contact', Mobile);
        formData.append('state', Location);
        formData.append('showroom', Showroom);
        formData.append('isShowroom', premise == 'true' ? true : false);


        $.ajax({
            url: "https://test-drive.campaignizer.com/api/onSubmit/almera-turbo-2020",
            processData: false,
            contentType: false,
            type: "POST",
            data: formData,
            success: function (result) {
                $('form').find('button').removeAttr('disabled', true);
                if (result.status) {
                    $('form')[0].reset();
                    $('form')[1].reset();
                    return window.open(window.location.origin + '/thank-you.html')
                }

                // Error define below here
                // using result.msg to get the error message
                $('.err-box').html(result.msg);
                console.error(result.msg);
            }
        });

    });

    

    var initPhotoSwipeFromDOM = function (gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for (var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                bgOpacity: 0.7,
                maxSpreadZoom: 1,
                getDoubleTapZoom: function (isMouseClick, item) {
                    return item.initialZoomLevel;
                },
                // UI options
                zoomEl: false,

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function (index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                },

                addCaptionHTMLFn: function (item, captionEl /*, isFake */ ) {
                    if (!item.title) {
                        captionEl.children[0].innerHTML = '';
                        return false;
                    }
                    captionEl.children[0].innerHTML = item.title;
                    // captionEl.children[0].style.width = (item.w * item.fitRatio) + 'px';
                    captionEl.children[0].style.width = (item.w * item.fitRatio) + 'px';
                    return true;
                }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };

    window.onresize = function (event) {
        setTimeout(function () {
            var imgwidth = $(".pswp__img:not(.pswp__img--placeholder)").width();
            $(".pswp__caption__center").css('width', imgwidth, 'important');
        }, 25);
    }

    // execute above function
    initPhotoSwipeFromDOM('.photoswipe-wrapper');
})(jQuery);