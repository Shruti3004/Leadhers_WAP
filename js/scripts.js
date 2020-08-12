    /* ==========================================================================
       Preloader
    ========================================================================== */
    $(window).on('load', function() {
         $('#status').fadeOut(); 
        $('#preloader').delay(400).fadeOut('slow');
        $('body').delay(400).css({'overflow':'visible'});
    })



/*----------nav bar----------*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20) {
    document.getElementById("navbarNavAltMarkup").style.background = "#47D19A";
  } else {
    document.getElementById("navbarNavAltMarkup").style.background = "transparent";
  }
}
