 
  /**
   * DEVELOPED BY 
   * STANLEY DS CHERICHEL
   * MIT LICENSE
  */
  
  $(document).foundation();

  $(document).foundation('alert');

 /**
  * BACKSTRETCH
  * a simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element
  * http://srobbin.com/jquery-plugins/backstretch/
  *
  * Backstretch as a slideshow.
  * 
  * Just pass in an array of images, and optionally a duration and fade value.
  *
  * Duration is the amount of time in between slides.
  * 
  * Dade is value that determines how quickly the next image will fade in
  *
  */

  $.backstretch([
	"http://37.media.tumblr.com/e57c423d3d247b4c1a0bc92a77364d39/tumblr_n5rb09ND8n1qzzelmo1_1280.png"
	, "http://37.media.tumblr.com/199b1b986b62f09d53de235b2ce40ad2/tumblr_n5pbzmDRQ31qzzelmo1_1280.png"
    , "http://31.media.tumblr.com/38edcd553f24eddefcdb1f409e1048a0/tumblr_n5rq14QI6Y1qzzelmo1_1280.png"
  ], {duration: 3000, fade: 750});
  
  /*
   * Uncomment this section if you would like to use Backstretch on a block level
   *
   * $("#soon").backstretch("http://example.com/yourimage.jpeg");
   *
   */



 /**
  * SUBSCRIPTION FORM
 */
    $('.alert-box').hide();
    $('.error').hide();

    $('.row form').submit(function() {
        var postdata = $('.row form').serialize();
        $.ajax({
            type: 'POST',
            url: 'subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.alert-box').hide();
                    $('.error').hide();
                    $('.error').html(json.message);
                    $('.error').fadeIn();
                }
                else {
                    $('.error').hide();
                    $('.alert-box').hide();
                    $('.row form').hide();
                    $('.alert-box').html(json.message);
                    $('.alert-box').fadeIn();
                }
            }
        })
        $( '.row form' ).click();
        return false;
    });

