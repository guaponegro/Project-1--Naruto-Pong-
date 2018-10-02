// Scoreboard
$('.scoreboard').append("<span id='score'>Score: (0)</span>");
$('#score').text("Score: " + score + "");


// Lives Tracker
$('.lifecount').append("<span id='lives'>Lives: (0)</span>");
$('#lives').text("Lives: " + lives + "");

// Start Game
$("#start").on("click", (e) => {
    $("img").attr("src", "Project-1-images/Show-Me-What-You-Got.gif")
    draw();
  });