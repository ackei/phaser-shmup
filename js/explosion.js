function boom (){
	enemyHitsPlayer(player, null);
}

	function enemyHitsPlayer (player,bullet) {
    		//  And create an explosion :)
			player.kill();
    		var explosion = explosions.getFirstExists(false);
    		explosion.reset(player.body.x, player.body.y);
    		explosion.play('died', 30, false, true);
			player.position.setTo(game.world.centerX, game.world.height+64);
			
			player.revive();
	}

function setupInvader (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('died');

}
