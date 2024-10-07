$(document).ready(function () {
    $('#sticky-isi-module .container').removeClass('container').addClass('container-fluid');
    
    $('.accordion-item').slice(0, 7).wrapAll('<div class="accordion-group-1"></div>');
    $('.accordion-item').slice(7).wrapAll('<div class="accordion-group-2"></div>');

    $(".navbar-toggler").click((function () {
        if ($("body").hasClass("without-scroll"))
            $("body").removeClass("without-scroll");
        else {
            $("body").addClass("without-scroll");
        }
    }
    ))

    function adjustBannerMargin() {
        var headerHeight = $('header').outerHeight(); 
        $('.main-wrapper').css('padding-top', headerHeight); 
    }

    adjustBannerMargin();

    $(window).on('resize', function () {
        adjustBannerMargin();
    });

    $('section.symptoms-hear-from-he #symptoms .hear-from-he .left .j-blk-btn-sec .j-btn a, section.symptoms-hear-from-he #symptoms .hear-from-he .right img').attr('data-bs-toggle', 'modal').attr('data-bs-target', '#home-wistia-popup');
    $('section.instant-copay-hepatic-xifaxan .checklist-flashcard .flashcard .right .j-blk-btn-sec .j-btn a, section.create-management-HE-kit-flashcard .he-kit-flashcard #he-living-kit-outer .container .he-living-kit .right .j-blk-btn-sec .j-btn a').attr('download', '');
    $('header .main-header nav #navbarCollapse .navbar-nav ul.navbar-nav li:nth-child(2) a').attr('data-bs-toggle', 'modal').attr('data-bs-target', '#hcp-pop').addClass('thirdParty');
    $('header .main-header nav #navbarCollapse .navbar-nav ul.navbar-nav li:nth-child(3) a').attr('href', '#isi');


    let anchorElement = location.hash;
    smoothScrolling(anchorElement);
    console.log(anchorElement);

    function smoothScrolling(anchorElement) {
        if (anchorElement && anchorElement !== '#') {
            const topPos = $(anchorElement).offset().top;
            const headerHeight = $('header').height();
            const scrollPosition = topPos - headerHeight - 86;
            $('html,body').animate({
                scrollTop: scrollPosition
            }, 500);
        }
    }


    $('header .navbar-nav li a').click(function (event) {
        const hash = this.hash;
        const href = this.href;

        if (href.includes(window.location.pathname) && hash) {
            event.preventDefault(); 
            console.log(hash);
            smoothScrolling(hash);
        } else {
            
            console.log("Navigating to external or another page:", href);
        }
    });

    $('header .top-links .links-wrapper ul li a').click(function (event) {
        
        const headerHeight = $('header').height();
        $('html,body').animate({
            scrollTop: $('.isiSection').offset().top - headerHeight
        }, 500);
    })

        handleAccordion();

        $(window).resize(function () {
            $('header .main-header nav #navbarCollapse .navbar-nav ul.navbar-nav li').off('click');
            handleAccordion();
        });



    function applyActiveClassBasedOnPath() {
        var path = window.location.pathname;

        if ($(window).width() > 991) {
            if (path === '/about-hepatic-encephalopathy/') {
                $('header .navbar #navbarCollapse ul.navbar-nav li:last-child').addClass('active');
                $('header .navbar #navbarCollapse ul.navbar-nav li:last-child ul li').removeClass('active');
            } else if (path === '/about-xifaxan-he/') {
                $('header .navbar #navbarCollapse ul.navbar-nav li:nth-child(7)').addClass('active');
                $('header .navbar #navbarCollapse ul.navbar-nav li:nth-child(7) ul li').removeClass('active');
            } else if (path === '/he-resources-support/'){
                $('header .navbar #navbarCollapse ul.navbar-nav li:nth-child(6)').addClass('active');
                $('header .navbar #navbarCollapse ul.navbar-nav li:nth-child(6) ul li').removeClass('active');
            } else if (path === '/he-caregiver/') {
                $('header .navbar #navbarCollapse ul.navbar-nav li:nth-child(5)').addClass('active');
                $('header .navbar #navbarCollapse ul.navbar-nav li:nth-child(5) ul li').removeClass('active');
            }
        } else {
            $('header .navbar #navbarCollapse ul.navbar-nav li').removeClass('active');
        }
    }


    applyActiveClassBasedOnPath();

    $(window).on('resize', function () {
        applyActiveClassBasedOnPath();
    });

    $('section.effects-how-take-guideline-xifaxan .effects-of-xifaxan .left .percentage-sections .fifty-eight-percent .block-1 .blk-img img').attr('alt', 'Brain');
    $('section.effects-how-take-guideline-xifaxan .effects-of-xifaxan .left .percentage-sections .fifty-eight-percent .block-1 .blk-img img').attr('loading', 'lazy');
    $('section.effects-how-take-guideline-xifaxan .effects-of-xifaxan .left .percentage-sections .fifty-percent .block-1 .blk-img img').attr('alt', 'Hospital');
    $('section.effects-how-take-guideline-xifaxan .effects-of-xifaxan .left .percentage-sections .fifty-percent .block-1 .blk-img img').attr('loading', 'lazy');
    $('section.effects-how-take-guideline-xifaxan .prescribed-question-xifaxan .prescribed-still-row .prescribed-column .prescribed .download-guide-copay .download-copay #download-copay-img-con .blk-img img').attr('alt', 'Copay');

});

function handleAccordion() {
    if (window.innerWidth <= 991) {
        
        $('header .main-header nav #navbarCollapse .navbar-nav > ul.navbar-nav > li:nth-child(6), header .main-header nav #navbarCollapse .navbar-nav > ul.navbar-nav > li:nth-child(7), header .main-header nav #navbarCollapse .navbar-nav > ul.navbar-nav > li:nth-child(8)').addClass('collapsed');

        $('header .main-header nav #navbarCollapse .navbar-nav > ul.navbar-nav > li').on('click', function (event) {
            
            if ($(event.target).is('a')) {
                
                $('#navbarCollapse').slideUp(); 

                return; 
            }

            const hasDropdown = $(this).find('.dropdown-menu').length > 0;
            if (hasDropdown) {
                event.preventDefault(); 

                const isCollapsed = $(this).hasClass('collapsed');

                
                $('header .main-header nav #navbarCollapse .navbar-nav > ul.navbar-nav > li')
                    .not(this)
                    .addClass('collapsed')
                    .find('.dropdown-menu')
                    .slideUp();

                if (isCollapsed) {
                    $(this).removeClass('collapsed');
                    $(this).find('.dropdown-menu').stop(true, true).slideDown();
                } else {
                    $(this).addClass('collapsed');
                    $(this).find('.dropdown-menu').stop(true, true).slideUp();
                }
            }
        });
    }
}


