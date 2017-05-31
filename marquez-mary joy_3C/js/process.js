var process = function() {
	   "use strict";
        return {


     // else {
     //player.body.velocity.y = 0;
     //player.animations.stop();
    //   }

audio : function(time){
		setInterval(function(){
			bgAudio.play();
			},time)

},
killBullets: function(can,bullets){
  score = score + 5;
  bullets.kill();
  soundeffects.play();
  

  if(process.getData()<=score){
      process.saveData(score);
      bestText.Text = "Best: "+score;
      console.log("x");
  }
  else{
      console.log("x");
  }
  scoreText.text = "Score: "+score;
},

killPlayer: function(enemy, bullets){
  lives = lives + (-1);1
  bullets.kill();
  // soundeffects1.play();

  explode = game.add.sprite((bullets.position.x),(bullets.position.y+30),"explode");
    explode.animations.add('explosion',[0,1,2,3,4],5,false);
    explode.animations.play('explosion');
    setTimeout(function(){
        explode.animations.stop();
        explode.scale.x = 0;
        explode.scale.y = 0;
        explode.kill();
    },400)

  LivesText.text = "Lives: " + lives;;
  if (lives == 0){
  game._paused = true;
  game.state.start("Gameover");

  gameOverText.text = "Game Over!\nBestscore: "+process.getData()+"\nScore: "+score;
  setTimeout(function(){
    game._paused = false;
    },2000)
    game._paused = true;
    game._paused = true;
    lives = 3;
}
// killCan: function(slipper, can){
//   lives = lives + (-1);
//   player.kill();
//     LivesText.text = "Lives: " + lives;;
//   if (lives == 0){
//     game._paused = true;
//     gameOverText.text = "Game Over!\nBestscore: "+process.getData()+"\nScore: "+score;
//     setTimeout(function(){
//       game._paused = false;
//     },3000)
//     game._paused = true;
//     game._paused = true;
//     lives = 3;
// }
},
saveData: function(score){
    localStorage.setItem("gameData" ,score); 
},
getData: function(){
    var data = localStorage.getItem("gameData");
    if(data ==null || data == ""){
        data = 0;
    }
    return data;
},
walkRight: function(){
    console.log("x");
    player.animations.play("walk-right");
    player.body.velocity.x = 100;

    /*button2.frame = 0;*/
},
walkLeft: function(){
    console.log("x");
    player.animations.play("walk-left");
    player.body.velocity.x = -100;

   /* left.frame = 0;*/
},
pause: function(){
  this.game.paused = true;
  var pausedText = this.add.text((w/2)-120, 200, "Game Paused\nTap to resume",{font:'25px Ravie',stroke: 'cyan',strokeThickness:2});
  this.input.onDown.add(function(){
    pausedText.destroy();
    this.game.paused = false;
  }, this);
},
restart: function(){
    game.state.start(game.state.current);




},

fireBullet: function(){
    console.log("Fire!!")
    if (game.time.now > bulletTime)
        {
           bullet = bullets.getFirstExists(false);
            
            if (bullet)
                {
                    bullet.reset(player.x, player.y);
                    //bullet.body.gravity.y = -500;
                    bullet.body.velocity.y = -500;
                    bulletTime = game.time.now + 200;
                }
            }
        },
        
}
}();





//  unpause : function(event){
//         // Only act if paused
//    game.paused = false;
// },

//  createStars : function(time) {
//     setInterval(function() {
//         stars= star.create(Math.random()*3000, -100, "star");
//         stars.body.gravity.y = 60;
 

//         stars.body.collideWorldBounds = true;
//     },time);
// }, 
//  createAnons : function(time) {
//     setInterval(function() {
//         anons= anon.create(Math.random()*3000, -600, "anon");
//         anons.body.gravity.y = 2000;



//         anons.body.collideWorldBounds = false;
//     },time);   
   
// },
//  collectStar : function(player, star) {
    
//     // Removes the star from the screen
//     star.kill();
//     score += 500;

//     if(process.getScore()<=score){
//         process.saveScore(score);
//         bestScoreText.text= "Best Game Score:  "+score;
//     }
    
//     scoreText.text = 'Game Score: ' + score;

// },
//  collectAnon : function (player, anon) {
    
//     // Removes the star from the screen
//     player.kill();
//    setTimeout(function(){
//         btn.frame = 0
//         game._paused = false;
//     }, 5000)
//     game._paused = true;
//      messageText.text = 'WASTED!\nClick Restart to Try Again\nHIGHSCORE:'+ score;
// },
//  saveScore : function(score){
//     localStorage.setItem("gameScore",score);
// },
//  getScore : function(){
//     return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore");
// },
//  goRight : function(){
//   	player.body.velocity.x = 600;
//     player.animations.play('right');
//  },
//  goLeft : function(){
//       player.body.velocity.x = -600;
//         player.animations.play('left');
//  },
//  goJump : function(){
//      player.body.velocity.y = -350;
// },
// stop : function(){
//     game.paused = true;
// },
//  play : function(){
//     game.paused = false;
// },
// restart : function(){
//     game.state.start(game.state.current);
//     },
// }
// }();