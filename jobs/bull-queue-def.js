var Queue = require('bull');
var path = require('path');
 
//Define queues
var audioQueue = new Queue('audio transcoding', 'redis://redis:6379');
audioQueue.process(function(job, done){
 
  console.log(JSON.stringify(job.data));
  done();
 
});

var queue = new Queue('processor queue', 'redis://redis:6379');
queue.process(5, path.resolve(__dirname, 'video-processor.js'));


//Add some test data to queues
audioQueue.add({video: 'http://example.com/video1.mov'});
queue.add({hello: 'world 1'});
queue.add({hello: 'world 2'});
queue.add({hello: 'world 3'});
queue.add({hello: 'world 4'});
queue.add({hello: 'world 5'});
