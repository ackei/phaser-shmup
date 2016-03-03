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
