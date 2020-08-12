    /* ==========================================================================
       Preloader
    ========================================================================== */
    $(window).on('load', function() {
         $('#status').fadeOut(); 
        $('#preloader').delay(400).fadeOut('slow');
        $('body').delay(400).css({'overflow':'visible'});
    })


