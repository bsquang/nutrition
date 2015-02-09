var bForceMove = true;

$(".bsq-panel").bind("touchstart",function(){
  document.activeElement.blur();
})
disallowOverscroll();
function disallowOverscroll(){
  $(document).on('touchmove',function(e){
    e.preventDefault();
  });
  $('body').on('touchstart','.scrollable',function(e) {
    if (e.currentTarget.scrollTop === 0) {
      e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight
              === e.currentTarget.scrollTop
                  + e.currentTarget.offsetHeight) {
      e.currentTarget.scrollTop -= 1;
    }
  });
  $('body').on('touchmove','.scrollable',function(e) {
    e.stopPropagation();
  });
}

(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function() {
    if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);


function showPanel(id) {
  
  $(document).scrollTop(0);
  
  $(".bsq-panel").hide();
  $(id).show();
}