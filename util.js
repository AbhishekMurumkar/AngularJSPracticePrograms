var util=require('util');
var events=require('events');

var eventEmitter=new events.EventEmitter();

//creating the object
var Student=function(name){
    this.name=name;
};

util.inherits(/*class which is inherited*/ Student,events.EventEmitter);
var max=new Student('max');
max.on('scored',function(marks){
    console.log(max.name+" scores "+marks+"%");
})
max.emit('scored',95);