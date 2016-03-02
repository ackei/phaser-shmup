window.onload = function() {

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
		var platforms;
		var player;
		var cursors;

        function preload () {

            game.load.image('logo', '../img/phaser.png');
    		game.load.image('ship', '../img/chapel-fighter.png');

        }

        function create () {

			//  We're going to be using physics, so enable the Arcade Physics system
			game.physics.startSystem(Phaser.Physics.ARCADE);

			//  A simple background for our game
    		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
			logo.anchor.setTo(0.5, 0.5);

			// The player and its settings
		    player = game.add.sprite(game.world.centerX, game.world.height - 32, 'ship');
			player.scale.setTo(32/player.width, 32/player.height);
			player.anchor.setTo(0.5, 0.5);

			//player.body.collideWorldBounds = true;
			//player.body.gravity.y = 300;
    
			cursors = game.input.keyboard.createCursorKeys();


    		//  We need to enable physics on the player
    		game.physics.arcade.enable(player);

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
		}

    };
