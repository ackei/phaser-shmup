
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)


    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
	
	var platforms;
	var player;
	var cursors;
	var explosions;
	var btnFire;
	var inGame;

};

BasicGame.Game.prototype = {

    create: function () {

		this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'planetbg');
		//this.background.scale.setTo(this.background.width/this.game.width, this.background.width/this.game.width);
		this.background.scale.setTo(2,2);
        
		var star1 = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'stars1');
		var star2 = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'stars2');
		
		star1.scale.setTo(2,2);
		star2.scale.setTo(2,2);

		star1.autoScroll(0, 200);
        star2.autoScroll(0, 50);
        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		//setup();
		var size = 64;

	//  We're going to be using physics, so enable the Arcade Physics system
	this.game.physics.startSystem(Phaser.Physics.ARCADE);

	//  A simple background for our game
	//var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
	//logo.anchor.setTo(0.5, 0.5);

	// The player and its settings
	player = this.game.add.sprite(this.game.world.centerX, this.game.world.height - size/2, 'ship');
	player.scale.setTo(size/player.width, size/player.height);
	player.anchor.setTo(0.5, 0.5);

	//player.body.collideWorldBounds = true;
	//player.body.gravity.y = 300;

	cursors = this.game.input.keyboard.createCursorKeys();
	btnFire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	//var kaboom = boom(player, null);
	btnFire.onDown.add(boom,this);

	//  We need to enable physics on the player
	this.game.physics.arcade.enable(player);

	//  An explosion pool
	explosions = this.game.add.group();
	explosions.createMultiple(30, 'died');
	explosions.forEach(setupInvader, this);

    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		//play();
		//  Reset the players velocity (movement)
	player.body.velocity.x = 0;
	player.body.velocity.y = 0;

	if (cursors.left.isDown)
	{
		//  Move to the left
		player.body.velocity.x = -150;
	}
	else if (cursors.right.isDown)
	{
		//  Move to the right
		player.body.velocity.x = 150;
	}
	else if (cursors.up.isDown)
	{
		//  Move to the right
		player.body.velocity.y = -150;
	}
	else if (cursors.down.isDown)
	{
		//  Move to the right
		player.body.velocity.y = 150;
	}
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }/*,


	boom: function (){
		enemyHitsPlayer(player, this.game.world.centerX, this.game.world.height);
}/*,

enemyHitsPlayer: function (player,bullet,game) {
    		//  And create an explosion :)
			player.kill();
    		var explosion = explosions.getFirstExists(false);
    		explosion.reset(player.body.x, player.body.y);
    		explosion.play('died', 30, false, true);
			player.position.setTo(game.world.centerX, game.world.height+64);
			
			player.revive();
	},

setupInvader: function (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('died');

}*/

};
