var sllog = require('single-line-log').stdout;
var logLevel;
var currProgress;

//the levels
const ERROR = 1;
const WARN = 2;
const INFO = 3;
const DEBUG = 4;
const FINER = 5;
const FINEST = 6;

//Constructor. Make it easy to see what level you're setting
function LogStuff(setLevel){
  switch (setLevel) {
    case 'ERROR':
      this.logLevel = ERROR;
      break;
    case 'WARN':
      this.logLevel = WARN;
      break;
    case 'INFO':
      this.logLevel = INFO;
      break;
    case 'DEBUG':
      this.logLevel = DEBUG;
      break;
    case 'FINER':
      this.logLevel = FINER;
      break;
    case 'FINEST':
      this.logLevel = FINEST;
      break;
    default:
      this.logLevel = WARN;
      break;
  }
}


//methods to make nice calls
LogStuff.prototype.error = function(str){
  this.log('ERROR: ' + str, ERROR);
}

LogStuff.prototype.warn = function(str){
  this.log('WARN: ' + str, WARN);
}

LogStuff.prototype.info = function(str){
  this.log('INFO: ' + str, INFO);
}

LogStuff.prototype.debug = function(str){
  this.log('DEBUG: ' + str, DEBUG);
}

LogStuff.prototype.finer = function(str){
  this.log('FINER: ' + str, FINER);
}

LogStuff.prototype.finest = function(str){
  this.log('FINEST: ' + str, FINEST);
}

LogStuff.prototype.progress = function(str){
  this.currProgress = str;
  sllog(this.currProgress);
}


//do the actual logging
LogStuff.prototype.log = function(str,level) {
  if(this.currProgress){
    //keep progress bars at the bottom
    sllog('');
    if (level <= this.logLevel) console.log(str);
    sllog(this.currProgress)
  } else {
    //just log
    if (level <= this.logLevel) console.log(str);
  }
}

module.exports = LogStuff;
