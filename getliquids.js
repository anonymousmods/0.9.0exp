function modTick(){


if(Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()) == 8 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()) == 9 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()) == 8 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()) == 9 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()) == 8 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()) == 9 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()+1) == 8 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()+1) == 9 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()-1) == 8 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()-1) == 9 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()+1) == 8 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()-1) == 9 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()-1) == 8 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()+1) == 9 ){

Level.setTile(getPlayerX(), getPlayerY()+1, getPlayerZ(), 9);
Level.destroyBlock(getPlayerX(), getPlayerY()+1, getPlayerZ(), false);

}


if(Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()) == 10 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()) == 11 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()) == 10 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()) == 11 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()) == 10 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()) == 11 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()+1) == 10 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()+1) == 11 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()-1) == 10 || Level.getTile(getPlayerX(), getPlayerY()+3, getPlayerZ()-1) == 11 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()+1) == 10 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()-1) == 11 || Level.getTile(getPlayerX()+1, getPlayerY()+3, getPlayerZ()-1) == 10 || Level.getTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()+1) == 11 ){

Level.setTile(getPlayerX(), getPlayerY()+1, getPlayerZ(), 11);
Level.destroyBlock(getPlayerX(), getPlayerY()+1, getPlayerZ(), false);

}


}
