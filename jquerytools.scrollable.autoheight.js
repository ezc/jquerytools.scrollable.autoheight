(function($) {

$.setScrollableRootHeight = function(api, index, method) {
  method = method || "animate";
  
  var item = api.getItems().eq(index),
      root = api.getRoot();
  
  root.stop()[method]({ height: item.height() });
}

// $('.scrollable').scrollable().autoheight();
$.fn.autoheight = function() {
  return this.each(function() {
    var api = $(this).data("scrollable");
    
    api.onSeek(function(e, index) {
      $.setScrollableRootHeight(api, index);
    }); 
    
    $(window).load(function() {
      $.setScrollableRootHeight(api, 0, "css");
      api.seekTo(0, 0);
    });
  });
};    
  
})(jQuery);