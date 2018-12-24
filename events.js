// node js is event driven architecture
var events=require('events');
//creating event emitter
var eventEmitter=new events.EventEmitter();
//creating listener
eventEmitter.on('clicked',function(args,args2){ //if triggered,then this would be executed
console.log("event is fired now, clicked");
});
eventEmitter.emit('clicked','args','args2');//triggering the event