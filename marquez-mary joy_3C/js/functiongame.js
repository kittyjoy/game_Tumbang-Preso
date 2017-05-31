var Game = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            game.load.image("bg", 'assets/bg.png');
            game.load.audio("bgMusic", "music/kanta.mp3");
            // game.load.audio("sound-effects", "music/cling.mp3");
            game.load.audio("soundeffects","music/cling.mp3");
            //game.load.audio("soundeffects1","music/haha.mp3");
            //game.load.image("slipper","assets/slipper.png",105,150);
            game.load.spritesheet("can",'assets/can.png',40,40);
            game.load.spritesheet("enemy",'assets/enemy.png',183,93);
            game.load.image("left","assets/button.png");
            game.load.image("button2","assets/button.png");
            game.load.image('restart', 'assets/restart.png');
            game.load.image("throw","assets/throw.png");
            //game.load.image('button1', 'img/pausebtn.png');
            game.load.image("bullet", "assets/slipper1.png");
            game.load.image("platform2","assets/platform2.png");
            game.load.spritesheet("naruto","assets/play105x280.png",105,280);
            game.load.spritesheet("button1","assets/btnpause.png",200,100);

            game.load.spritesheet("explode","assets/ex.png",70,70);
     

},
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
  

            game.add.sprite(0, 0, 'bg'); 
            bgAudio = game.add.audio("bgMusic");
            bgAudio.play();
            process.audio(26000);

            //soundEffects = game.add.audio("cling");
            soundeffects = game.add.audio("soundeffects");
            //soundeffects = game.add.audio("soundeffects1");  
          

            player = game.add.sprite(125,325,"naruto");
            player.scale.x = .75;
            player.scale.y = .75;
            button2 = game.add.button(185,0,"button2",process.walkRight);
            button2.scale.x = 9;
            button2.scale.y = 18;
            left = game.add.button(175,0,"left",process.walkLeft);
            left.scale.x = -9;
            left.scale.y = 18;
            button1 = game.add.button(245,0,"button1", process.pause, this,1,0);
            button1.scale.x = .45;
            button1.scale.y = .5;
            button3 = game.add.button(315,4,"restart",process.restart);
            button3.scale.x = .30;
            button3.scale.y = .35;
      
            platform2 = game.add.sprite(-25,600,"platform2");
            platform2.scale.x = .5;
            platform2.scale.y =.25;

            player.animations.add('walk-right',[5,6,7,8,9],17,true);
            player.animations.add('walk-left',[0,1,2,3,4],17,true);
    
            
            keyboard = game.input.keyboard.createCursorKeys();

            fireButton = game.add.button(250,520,"throw", process.fireBullet);



            game.physics.arcade.enable(platform2);
            platform2.body.immovable = true;
            platform2.scale.x = 2;

            game.physics.arcade.enable(player);
            player.body.collideWorldBounds = true;
            player.body.gravity.y = 1000;
            player.body.bounce.y = 0.2

            can = game.add.sprite(165,140,"can");

            //game.physics.arcade.enable(enemy);
            enemy = game.add.sprite(0,10,"enemy");

            game.physics.arcade.enable(enemy);
            //enemy.body.immovable = true;
            enemy.animations.add('fly', [0,1,2,3], 5, true);

            var tween = game.add.tween(enemy).to( { x: 180 }, 5000, Phaser.Easing.Linear.None, true, 0,10, true);
            

            game.physics.arcade.enable(enemy);
            game.physics.arcade.enable(player);
            game.physics.arcade.enable(can);

            player.body.collideWorldBounds = true;


          
            enemy.body.collideWorldBounds = true;
            can.body.collideWorldBounds = true;
           
      

    scoreText = game.add.text(1,0,"Score: 0" ,
       {font:'10px Ravie',stroke: 'magenta',strokeThickness:2});
    bestText = game.add.text(w-357,30,"Best: "+process.getData() ,{font:'10px Ravie',stroke: 'yellow',strokeThickness:2});
    gameOverText = game.add.text((w/2)-70,150,"",{font:'10px Ravie',stroke: 'violet',strokeThickness:1});
    LivesText = game.add.text(150,0,"Lives: 3",{font:'32px Ravie',stroke: 'white',strokeThickness:5});
    PauseText = game.add.text((w/2)-70,150,"",{font:'32px Ravie',stroke: 'pink',strokeThickness:4});
    scoreText.scale.x = 1.25;
    scoreText.scale.y = 3;  
    bestText.scale.x = 1.25;
    bestText.scale.y = 3;
    gameOverText.scale.x = 2;
    gameOverText.scale.y = 5;
    LivesText.scale.x =.40;
    LivesText.scale.y = 1;
    PauseText.scale.x = 2;
    PauseText.scale.y = 5;


    bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(30, "bullet");
        bullets.setAll("anchor.x", 0);
        bullets.setAll("anchor.y", .5);
        bullets.setAll("outOfBoundsKill", true);
        bullets.setAll("checkWorldBounds", true);
        
},
    
// var x = 0;
update: function() {
             enemy.animations.play("fly");
             enemy.body.velocity.x = .1;
             enemy.body.velocity.x = -.1;
             enemy.body.bounce.x = 0;

    game.physics.arcade.collide(player,platform2);
    game.physics.arcade.overlap(bullets,can,process.killBullets);
    //game.physics.arcade.collide(can,bullets);
    game.physics.arcade.overlap(bullets,enemy,process.killPlayer);
    //game.physics.arcade.collide(bullets,enemy,lives);



if (fireButton.isDown)
            {
                process.fireBullet();
            }

},  
};
game.state.add("Game" ,Game, false);
