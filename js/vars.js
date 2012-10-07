///////////////////////////
///////~ VARIABLES ~///////
///////////////////////////

var gameLaunched = false;

var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var direction_hp1 = UP;
var direction_hp2 = RIGHT;
var direction_hp3 = LEFT;
var direction_hp4 = DOWN;

var position_hp1 = [1,1];
var position_hp2 = [48,1];
var position_hp3 = [48,48];
var position_hp4 = [1,48];

var hp_enabled = [false,false,false,false];
var bot_enabled = [false, false, false, false];

var timer = null;
var map = [];