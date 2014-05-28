

var chest = 54;
var torch = 50;


function newLevel(){

 
for(var i = 0; i < 2000; i++){

var chestX = Math.floor((Math.random() * 256) + 1);
var chestY = Math.floor((Math.random() * 125) + 1);
var chestZ = Math.floor((Math.random() * 256) + 1);

if(Level.getTile(chestX, chestY-1, chestZ) == 2 || Level.getTile(chestX, chestY-1, chestZ) == 12 && Level.getTile(chestX, chestY+1, chestZ) != 8 && Level.getTile(chestX-2, chestY, chestZ) != 8 || Level.getTile(chestX, chestY-1, chestZ) == 79){


Level.setTile(chestX, chestY, chestZ+1, torch, 0);
Level.setTile(chestX, chestY, chestZ-1, torch, 0);   
Level.setTile(chestX+1, chestY, chestZ, torch, 0); 
Level.setTile(chestX-1, chestY, chestZ, torch, 0);
Level.setTile(chestX, chestY, chestZ, chest, 0);

var a = Math.floor((Math.random() * 3) + 1);

if(a == 1){
Level.setChestSlot(chestX, chestY, chestZ, 3, 5, 0, 1);
Level.setChestSlot(chestX, chestY, chestZ, 1, 5, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 6, 5, 0, 3);
}else if(a == 2){
Level.setChestSlot(chestX, chestY, chestZ, 3, 5, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 1, 5, 0, 1);
Level.setChestSlot(chestX, chestY, chestZ, 6, 5, 0, 3);
}else if(a ==3){
Level.setChestSlot(chestX, chestY, chestZ, 3, 5, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 1, 5, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 6, 5, 0, 1);
}

var s = Math.floor((Math.random() * 3) + 1);

if(s == 1){
Level.setChestSlot(chestX, chestY, chestZ, 7, 17, 0, 1);
Level.setChestSlot(chestX, chestY, chestZ, 4, 17, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 9, 17, 0, 3);
}else if(s == 2){
Level.setChestSlot(chestX, chestY, chestZ, 7, 17, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 4, 17, 0, 1);
Level.setChestSlot(chestX, chestY, chestZ, 9, 17, 0, 3);
}else if(s ==3){
Level.setChestSlot(chestX, chestY, chestZ, 7, 17, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 4, 17, 0, 3);
Level.setChestSlot(chestX, chestY, chestZ, 9, 17, 0, 1);
}

var d = Math.floor((Math.random() * 2) + 1);

if(d == 1){
Level.setChestSlot(chestX, chestY, chestZ, 2, 270, 0, 1);
}else if(d == 2){
Level.setChestSlot(chestX, chestY, chestZ, 2, 274, 0, 1);
}

var f = Math.floor((Math.random() * 2) + 1);

if(f == 1){
Level.setChestSlot(chestX, chestY, chestZ, 10, 271, 0, 1);
} if(f == 2){
Level.setChestSlot(chestX, chestY, chestZ, 10, 275, 0, 1);
}

Level.setChestSlot(chestX, chestY, chestZ, 15, 280, 0, 1);

var q = Math.floor((Math.random() * 2) + 1);

if(q == 1){
Level.setChestSlot(chestX, chestY, chestZ, 13, 260, 0, 3);
}else if(q == 2){
Level.setChestSlot(chestX, chestY, chestZ, 13, 260, 0, 2);
}

var w = Math.floor((Math.random() * 2) + 1);

if(w == 1){
Level.setChestSlot(chestX, chestY, chestZ, 11, 297, 0, 2);
}else if(w == 2){
Level.setChestSlot(chestX, chestY, chestZ, 11, 297, 0, 3);
}


   }


 }


}
