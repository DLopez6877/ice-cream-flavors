$(function() {

  $(".flavors").click(function(){

    var icecreams = ["chocolate chip", "mint chocolate chip", "lavendar", "bubble gum", "coffee"];

    icecreams.forEach(function(icecream){
      $("#ice-creams").prepend('<li>' + icecream + '</li>');
    });

  });

});

// Before looping the array:

// $("#ice-creams").prepend('<li>' + icecreams[0] + '</li>' + '<li>' + icecreams[1] + '</li>' + '<li>' + icecreams[2] + '</li>' + '<li>' + icecreams[3] + '</li>' + '<li>' + icecreams[4] + '</li>');
