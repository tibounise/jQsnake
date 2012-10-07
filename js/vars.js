///////////////////////////
///////~ VARIABLES ~///////
///////////////////////////

gameLaunched = false;

UP = 0;
DOWN = 1;
LEFT = 2;
RIGHT = 3;

direction_hp1 = UP;
direction_hp2 = RIGHT;
direction_hp3 = LEFT;
direction_hp4 = DOWN;

position_hp1 = [1,1];
position_hp2 = [48,1];
position_hp3 = [48,48];
position_hp4 = [1,48];

hp_enabled = [false,false,false,false];
bot_enabled = [false, false, false, false];

timer = null;
map = [];