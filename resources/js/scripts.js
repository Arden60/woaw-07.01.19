cssVars();

// open nav

$('.nav-prompt').click(function() {

    if ($('.nav-inner').attr('aria-expanded') =='false') {

        $('.nav-inner').attr('aria-expanded', 'true');


    } else {

        $('.nav-inner').attr('aria-expanded', 'false');

    }

    if ($('.nav-prompt').text() == 'Open Navigation') {

        $('.nav-prompt').text('Close Navigation');
     

    }

    else {

        $('.nav-prompt').text('Open Navigation');

    }
 
})

  

// nav active class function

function activeMenu() {

    var url = window.location.href;

    $('.nav-inner a').filter(function() {

        return this.href == url;

    }).addClass('active');

    }

    // now run the function

    activeMenu();


    // image gallery
function imageGallery() {
    if (!$(".image-gallery").length) {
    return;
    /* this means that the page is looking for something with a class of 'image-gallery'
    If it can't find one, it 'returns', which means it does nothing.
    If it DOES find such a class (like on our media page), then it will carry on and read the line below.
    Without these lines above, this script would cause an error on pages without a gallery.
    */
    }
    $(".image-gallery a").simpleLightbox();
    // this says to run the script on all <a> tags inside .image-gallery
    }
    imageGallery(); // this says to invoke the script and make it run.

