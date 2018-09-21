module.exports = function(job){
  // Do some heavy work
 
  console.log('processing in the queue');
  console.log(JSON.stringify(job.data));
  return Promise.resolve(job.data);
}

