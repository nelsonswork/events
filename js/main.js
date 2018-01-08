 
$(document).ready(function () {
 
 var displayResources = $('#showlist');
 
 displayResources.text('Loading data from JSON source...');
 
 $.ajax({
 type: "GET",
 url: "data/shows.json",
 success: function(result)
 {
 console.log(result);
 var output="";
 for (var i in result)
 {
 output+="<div class='" + result[i].genre +" singleshow'><div class='date'><div class='day'>" + result[i].date.dayOfMonth + "</div><div class='month'>" + result[i].date.month + "</div></div><div class='details'><div class='weekday'>" +result[i].date.dayOfWeek + "</div><div class='location'>" + result[i].location + "</div></div></div>";
 }
 
 displayResources.html(output);
 $("table").addClass("table");
 }
 });
///// filter by category grab id from filter button //// 
	var $btns = $('.filter').click(function() {
  if (this.id == 'all') {
    $('#showlist > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).delay( 250 ).fadeIn(450);
    $('#showlist > div').not($el).fadeOut(250);
  }
  $btns.removeClass('active');
  $(this).addClass('active');
});
	
 
 
});

