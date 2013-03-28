
var Loader = {

  run: function() {
	  var w = $('#pinterestIframe'); 
	  w.attr('src', "http://m.pinterest.com");
  },

};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  Loader.run();
});
