console.log("Your index.js file is loaded correctly")

//method1

$(image2).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '40px',
      width: '40px'
    });
  });
});

//method2

$("circle").click( function(){
    $('.image2').animate( {left: '250px'}, 1000 );