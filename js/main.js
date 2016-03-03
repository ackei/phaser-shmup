window.onload = function() {

        var game = new Phaser.Game(600, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });
		var platforms;
		var player;
		var cursors;
		var explosions;
		var btnFire;

        function preload () {

			var imgdir = "img/";
            game.load.image('logo', imgdir+'phaser.png');
    		game.load.image('ship', imgdir+'chapel-fighter.png');
			game.load.spritesheet('died', imgdir+'explode.png', 128, 128);
        }

        function create () {
			var size = 32;

			//  We're going to be using physics, so enable the Arcade Physics system
			game.physics.startSystem(Phaser.Physics.ARCADE);

			//  A simple background for our game
    		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
			logo.anchor.setTo(0.5, 0.5);

			// The player and its settings
		    player = game.add.sprite(game.world.centerX, game.world.height - size/2, 'ship');
			player.scale.setTo(size/player.width, size/player.height);
			player.anchor.setTo(0.5, 0.5);

			//player.body.collideWorldBounds = true;
			//player.body.gravity.y = 300;
    
			cursors = game.input.keyboard.createCursorKeys();
			btnFire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    		//  We need to enable physics on the player
    		game.physics.arcade.enable(player);
    
			//  An explosion pool
    explosions = game.add.group();
    explosions.createMultiple(30, 'died');
    explosions.forEach(setupInvader, this);
        }
		
		
		function update() {

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

			if(btnFire.isDown) enemyHitsPlayer(player, null);
		}

		function enemyHitsPlayer (player,bullet) {
    
    		//bullet.kill();

    		//live = lives.getFirstAlive();

			/*
    		if (live)
    		{
        		live.kill();
    		}
			*/

    		//  And create an explosion :)
			player.kill();
    		var explosion = explosions.getFirstExists(false);
    		explosion.reset(player.body.x, player.body.y);
    		explosion.play('died', 30, false, true);
			player.position.setTo(game.world.centerX, game.world.height+32);
			
			player.revive();
			//player.animations.play('died');
    		// When the player dies
    		/*
			if (lives.countLiving() < 1)
    		{
        		player.kill();
        		enemyBullets.callAll('kill');

        		stateText.text=" GAME OVER \n Click to restart";
        		stateText.visible = true;

        		//the "click to restart" handler
        		game.input.onTap.addOnce(restart,this);
    		}
			*/
}

function setupInvader (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('died');

}
    };
