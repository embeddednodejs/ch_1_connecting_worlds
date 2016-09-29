

// a simple robot object
var robot = {}
robot['hand'] = 'up';
robot.hand = 'up';



function Robot() {};
var robot = new Robot();





robot.raiseHand = function() {
  this.hand = 'up';
};

var robot2 = {
   hand: 'up',
   raiseHand: function() {}
}
robot2;

