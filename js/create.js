//this would be where the create code would preferably be.
function setup()
{
	var size = 64;

	//  We're going to be using physics, so enable the Arcade Physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//  A simple background for our game
	var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
	logo.anchor.setTo(0.5, 0.5);

	// The player and its settings
	player = game.add.sprite(game.world.centerX, game.world.height - size/2, 'ship');
	player.scale.setTo(size/player.width, size/player.height);
	player.anchor.setTo(0.5, 0.5);

	cursors = game.input.keyboard.createCursorKeys();
	btnFire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	btnFire.onDown.add(boom);

	//  We need to enable physics on the player
	game.physics.arcade.enable(player);

	//  An explosion pool
	explosions = game.add.group();
	explosions.createMultiple(30, 'died');
	explosions.forEach(setupInvader, this);
}
