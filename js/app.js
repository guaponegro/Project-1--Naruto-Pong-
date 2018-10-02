// Scoreboard
$('.scoreboard').append("<span class='score'>Score: (0)</span>");
$('.score').text("Score: " + score + "");


// Lives Tracker
$('.lifecount').append("<span class='lives'>Lives: (0)</span>");
$('.lives').text("Lives: " + lives + "");

// Start Game
$("#start").on("click", (e) => {

    draw();
  });

  

$("#col-right").append("<span id='img'></span>");
$("#img").attr("src", "../images/Rick-Dancing.gif")