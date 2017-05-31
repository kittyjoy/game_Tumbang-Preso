
var w = 360;
var h = 620;
var basicGame;
var bgAudio;
var soundeffects;
// var soundeffects1;

var game;
var player;
var player,keyboard;
var rat, rats, platform2, grains, scoreText, bestText, gameOverText, PauseText, LivesText, rat, rats;
var can;
var slipper;
var button,button2;
var reset;

var explode;
var weapon;
var cursors;
var fireButton;
var bullet;
var bulletTime=0;
var fireButton;

var score = 0;
var lives = 3;
game = new Phaser.Game(w, h, Phaser.CANVAS, '');

game.state.add('Menu', Menu);

/*// Adding the Game state.
game.state.add('Game', Game);*/

game.state.start('Menu');
/*var basicGame = function(){
}
*/
game.state.add('Game');
/*var basicGame = function(){

*/
game.state.add('Gameover');