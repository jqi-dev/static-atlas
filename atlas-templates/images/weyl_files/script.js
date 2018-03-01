window.onload = function() {

  var linebound_height = $('.linebounds').height()
  var slider_value = 0;
  var mask_tween = 0.5;
  var band_tween = 0;
  var gap_tween = 1;

  var mask_values = {
    insulator: 0.5,
    semiconductor: 0.46,
    semimetal: 0.48,
    conductor: 0.75
  }

  var band_values = {
    insulator: 0,
    semiconductor: 0.5,
    semimetal: 0.86,
    conductor: 0
  }

  var gap_values = {
    insulator: 1,
    semiconductor: 1,
    semimetal: 0,
    conductor: 1
  }

  // Initial state - insulator text and band

  TweenMax.set('#band_mask', {y: -mask_tween * (linebound_height), ease: Power1.easeInOut})

  // rescale when the window is resized

  $( window ).resize(function() {

    linebound_height = $('.linebounds').height()
    TweenMax.set('#band_mask', {y: -mask_tween * (linebound_height), ease: Power1.easeInOut})
    TweenMax.set(['#bluepath', '#blue_behind', '#band_label'], {y: band_tween * (linebound_height)/6, ease: Power1.easeInOut})
    TweenMax.set('#gap_label', {y: band_tween * (linebound_height)/12, ease: Power1.easeInOut})
    TweenMax.set('#gap_label', {opacity: gap_tween})

  });


  // Button toggle

  var buttons = $('button').on('click', function (e) {

      var $this = $(this),
          el = buttons.not(this),
          button_id = this.id;

      $this.removeClass('disabled');
      $this.addClass('selected');
      el.addClass('disabled');

      var captions = $('.caption-text');

      $('.caption-text').each(function() {
        if (this.id == button_id + "-label") {
          $(this).css('opacity', '1');
        }
        else {
          $(this).css('opacity', '0');
        }
      });

      mask_tween = mask_values[button_id.toString()]
      band_tween = band_values[button_id.toString()]
      gap_tween = gap_values[button_id.toString()]

      TweenMax.to('#band_mask', 1, {y: -(mask_tween) * (linebound_height), ease: Power1.easeInOut})
      TweenMax.to(['#bluepath', '#blue_behind', '#band_label'], 1, {y: band_tween * (linebound_height)/6, ease: Power1.easeInOut})
      TweenMax.to('#gap_label', 1, {y: band_tween * (linebound_height)/12, ease: Power1.easeInOut})
      TweenMax.to('#gap_label', 1, {opacity: gap_tween})

  });

}
