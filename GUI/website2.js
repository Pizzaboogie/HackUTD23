$("fieldset:first").fadeIn(); //show first fieldset
var animating=false;
$(".Next").click(function() {
    console.log("clicked")
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  //remove current active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active")
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      scale = 1 - (1 - now) * 0.2;
      left = (now * 50) + "%";
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale(' + scale + ')',
        'position': 'absolute'
      });
      next_fs.css({
        'left': left,
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function() {
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});
//suppose submit button is click 
$(".action-button").click(function() {
  //call function
  nextFieldSet()
})

function nextFieldSet() {
  if (animating) return false;
  animating = true;
  //get active li index
  current_fs = $("#progressbar li.active").index();
  //for next div add 1
  next_fs = $("#progressbar li.active").index() + 1;
  $("#progressbar li").eq(current_fs).removeClass("active") //remove current active
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq(next_fs).addClass("active");
  var next_divs = $("fieldset:eq(" + next_fs + ")") //find the fieldset eq 
  var current_div = $("fieldset:eq(" + current_fs + ")")
  //show the next fieldset
  next_divs.show();
  //hide the current fieldset with style
  current_div.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      scale = 1 - (1 - now) * 0.2;
      left = (now * 50) + "%";
      opacity = 1 - now;
      current_div.css({
        'transform': 'scale(' + scale + ')',
        'position': 'absolute'
      });
      next_divs.css({
        'left': left,
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function() {
      current_div.hide();
      animating = false;
    },
    easing: 'easeInOutBack'
  });
}