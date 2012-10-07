///////////////////////////
///////~ VARIABLES ~///////
///////////////////////////

var gameLaunched = false;

var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var direction_hp1 = UP;
var direction_hp2 = DOWN;
var direction_hp3 = LEFT;
var direction_hp4 = RIGHT;

var position_hp1 = [0,0];
var position_hp2 = [0,0];
var position_hp3 = [0,0];
var position_hp4 = [0,0];

var hp_enabled = [false,false,false,false];
var bot_enabled = [false, false, false, false];

var timer = null;
var map = [];