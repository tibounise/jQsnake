///////////////////////////
///////~ VARIABLES ~///////
///////////////////////////

gameLaunched = false;

UP = 0;
DOWN = 1;
LEFT = 2;
RIGHT = 3;

direction_hp = Array(4);
position_hp = Array(4);

direction_hp[1] = UP;
direction_hp[2] = RIGHT;
direction_hp[3] = LEFT;
direction_hp[4] = DOWN;

position_hp[1] = [1,1];
position_hp[2] = [48,1];
position_hp[3] = [48,48];
position_hp[4] = [1,48];

hp_enabled = [false,false,false,false];
bot_enabled = [false, false, false, false];

timer = null;
map = [];