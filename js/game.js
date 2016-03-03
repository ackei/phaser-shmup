function play ()
{
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
