

var stem = 25;
var block = 23;
var block1 = 250;
var block2 = 251;
var block3 = 252;


Block.defineBlock(23, "Mushroom Block", [["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0]], 0, true, 0); 

Block.defineBlock(250, "Mushroom Block", [["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0]], 0, true, 0); 

Block.defineBlock(251, "Mushroom Block", [["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0]], 0, true, 0); 

Block.defineBlock(252, "Mushroom Block", [["mushroom_block_inside", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_skin_red", 0], ["mushroom_block_inside", 0]], 0, true, 0); 

Block.defineBlock(25, "Mushroom Stem", [["mushroom_block_inside", 0], ["mushroom_block_inside", 0], ["mushroom_block_skin_stem", 0], ["mushroom_block_skin_stem", 0], ["mushroom_block_skin_stem", 0], ["mushroom_block_skin_stem", 0]], 0, true, 0); 


function newLevel(){


for(var i = 0; i < 5000; i++){


var X = Math.floor((Math.random() * 256) + 1);
var Y = Math.floor((Math.random() * 125) + 1);
var Z = Math.floor((Math.random() * 256) + 1);


if(Level.getTile(X, Y-1, Z) == 2){


var as = Math.floor((Math.random() * 2) + 1);

if(as == 1){

Level.setTile(X+1, Y+1, Z+2, block, 0);
Level.setTile(X+1, Y+2, Z+2, block, 0);
Level.setTile(X+1, Y+3, Z+2, block, 0);
Level.setTile(X, Y+3, Z+2, block, 0);
Level.setTile(X, Y+2, Z+2, block, 0);
Level.setTile(X, Y+1, Z+2, block, 0);
Level.setTile(X-1, Y+1, Z+2, block, 0);
Level.setTile(X-1, Y+2, Z+2, block, 0);
Level.setTile(X-1, Y+3, Z+2, block, 0);

Level.setTile(X+1, Y+1, Z-2, block1, 0);
Level.setTile(X+1, Y+2, Z-2, block1, 0);
Level.setTile(X+1, Y+3, Z-2, block1, 0);
Level.setTile(X, Y+3, Z-2, block1, 0);
Level.setTile(X, Y+2, Z-2, block1, 0);
Level.setTile(X, Y+1, Z-2, block1, 0);
Level.setTile(X-1, Y+1, Z-2, block1, 0);
Level.setTile(X-1, Y+2, Z-2, block1, 0);
Level.setTile(X-1, Y+3, Z-2, block1, 0);

Level.setTile(X+2, Y+1, Z+1, block2, 0);
Level.setTile(X+2, Y+2, Z+1, block2, 0);
Level.setTile(X+2, Y+3, Z+1, block2, 0);
Level.setTile(X+2, Y+3, Z, block2, 0);
Level.setTile(X+2, Y+2, Z, block2, 0);
Level.setTile(X+2, Y+1, Z, block2, 0);
Level.setTile(X+2, Y+1, Z-1, block2, 0);
Level.setTile(X+2, Y+2, Z-1, block2, 5);
Level.setTile(X+2, Y+3, Z-1, block2, 5);
Level.setTile(X-2, Y+1, Z+1, block3, 0);
Level.setTile(X-2, Y+2, Z+1, block3, 0);
Level.setTile(X-2, Y+3, Z+1, block3, 0);
Level.setTile(X-2, Y+3, Z, block3, 0);
Level.setTile(X-2, Y+2, Z, block3, 0);
Level.setTile(X-2, Y+1, Z, block3, 0);
Level.setTile(X-2, Y+1, Z-1, block3, 0);
Level.setTile(X-2, Y+2, Z-1, block3, 5);
Level.setTile(X-2, Y+3, Z-1, block3, 5);

Level.setTile(X-1, Y+4, Z-1, block1, 1);
Level.setTile(X-1, Y+4, Z+1, block, 0);
Level.setTile(X+1, Y+4, Z-1, block1, 1);
Level.setTile(X+1, Y+4, Z+1, block, 0);
Level.setTile(X, Y+4, Z-1, block1, 1);
Level.setTile(X, Y+4, Z+1, block, 0);
Level.setTile(X-1, Y+4, Z, block, 0);
Level.setTile(X+1, Y+4, Z, block, 0);
Level.setTile(X, Y+4, Z, block, 0);
Level.setTile(X, Y+3, Z, stem, 0);
Level.setTile(X, Y+3, Z, stem, 0);
Level.setTile(X, Y+2, Z, stem, 0);
Level.setTile(X, Y+2, Z, stem, 0);
Level.setTile(X, Y+1, Z, stem, 0);
Level.setTile(X, Y+1, Z, stem, 0);
Level.setTile(X, Y, Z, stem, 0);

}

if(as == 2){

Level.setTile(X+1, Y+2, Z+2, block, 0);
Level.setTile(X+1, Y+3, Z+2, block, 0);
Level.setTile(X+1, Y+4, Z+2, block, 0);
Level.setTile(X, Y+4, Z+2, block, 0);
Level.setTile(X, Y+3, Z+2, block, 0);
Level.setTile(X, Y+2, Z+2, block, 0);
Level.setTile(X-1, Y+2, Z+2, block, 0);
Level.setTile(X-1, Y+3, Z+2, block, 0);
Level.setTile(X-1, Y+4, Z+2, block, 0);

Level.setTile(X+1, Y+2, Z-2, block1, 0);
Level.setTile(X+1, Y+3, Z-2, block1, 0);
Level.setTile(X+1, Y+4, Z-2, block1, 0);
Level.setTile(X, Y+4, Z-2, block1, 0);
Level.setTile(X, Y+3, Z-2, block1, 0);
Level.setTile(X, Y+2, Z-2, block1, 0);
Level.setTile(X-1, Y+2, Z-2, block1, 0);
Level.setTile(X-1, Y+3, Z-2, block1, 0);
Level.setTile(X-1, Y+4, Z-2, block1, 0);

Level.setTile(X+2, Y+2, Z+1, block2, 0);
Level.setTile(X+2, Y+3, Z+1, block2, 0);
Level.setTile(X+2, Y+4, Z+1, block2, 0);
Level.setTile(X+2, Y+4, Z, block2, 0);
Level.setTile(X+2, Y+3, Z, block2, 0);
Level.setTile(X+2, Y+2, Z, block2, 0);
Level.setTile(X+2, Y+2, Z-1, block2, 0);
Level.setTile(X+2, Y+3, Z-1, block2, 5);
Level.setTile(X+2, Y+4, Z-1, block2, 5);
Level.setTile(X-2, Y+2, Z+1, block3, 0);
Level.setTile(X-2, Y+3, Z+1, block3, 0);
Level.setTile(X-2, Y+4, Z+1, block3, 0);
Level.setTile(X-2, Y+4, Z, block3, 0);
Level.setTile(X-2, Y+3, Z, block3, 0);
Level.setTile(X-2, Y+2, Z, block3, 0);
Level.setTile(X-2, Y+2, Z-1, block3, 0);
Level.setTile(X-2, Y+3, Z-1, block3, 5);
Level.setTile(X-2, Y+4, Z-1, block3, 5);

Level.setTile(X-1, Y+5, Z-1, block1, 1);
Level.setTile(X-1, Y+5, Z+1, block, 0);
Level.setTile(X+1, Y+5, Z-1, block1, 1);
Level.setTile(X+1, Y+5, Z+1, block, 0);
Level.setTile(X, Y+5, Z-1, block1, 0);
Level.setTile(X, Y+5, Z+1, block, 0);
Level.setTile(X-1, Y+5, Z, block, 0);
Level.setTile(X+1, Y+5, Z, block, 0);
Level.setTile(X, Y+5, Z, block, 0);
Level.setTile(X, Y+4, Z, stem, 0);
Level.setTile(X, Y+4, Z, stem, 0);
Level.setTile(X, Y+3, Z, stem, 0);
Level.setTile(X, Y+3, Z, stem, 0);
Level.setTile(X, Y+2, Z, stem, 0);
Level.setTile(X, Y+2, Z, stem, 0);
Level.setTile(X, Y+1, Z, stem, 0);
Level.setTile(X, Y+1, Z, stem, 0);
Level.setTile(X, Y, Z, stem, 0);

}

}


}


}
