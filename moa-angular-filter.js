(function(){

'use strict';

angular.module('moa.filter', [])
.filter('throughtput', function(){
  'v1.0.0';
  var unit = ['bps','Kbps','Mbps','Gbps','Tbps'];
  return function(input, point){
    input = parseInt(input, 10) || 0;
    point = point || 2;
    var inc = 0;
    while(input>1024){
      input = input/1024;
      inc++;
    }
    return Math.round(input*Math.pow(10,point))/Math.pow(10,point)+' '+unit[inc];
  };
})
.filter('capacity', function(){
  'v1.0.0';
  var unit = ['b','KB','MB','GB','TB'];
  return function(input, point){
    input = parseInt(input, 10) || 0;
    point = point || 2;
    var inc = 0;
    while(input>1024){
      input = input/1024;
      inc++;
    }
    return Math.round(input*Math.pow(10,point))/Math.pow(10,point)+' '+unit[inc];
  };
})
.filter('time', function($filter){
  'v1.0.1';
  return function(input, format){
    var r = parseInt(input, 10) || 0;

    var day = Math.floor(r/86400000);
    r = r%86400000;
    var hour = Math.floor(r/3600000);
    r = r%3600000;
    var minute = Math.floor(r/60000);
    r = r%60000;
    var second = Math.floor(r/1000);
    r = r%1000;
    var ms = r;
    if(format){
      return format.replace('dd',$filter('prezero')(day)).replace('hh',$filter('prezero')(hour)).replace('ii',$filter('prezero')(minute)).replace('ss',$filter('prezero')(second)).replace('mm',$filter('prezero')(ms));
    }
    else{
      return day+','+$filter('prezero')(hour)+':'+$filter('prezero')(minute)+':'+$filter('prezero')(second)+'.'+ms;
    }
  };
})
.filter('prezero', function(){
  'v1.0.0';
  return function(input, length){
    input = parseInt(input, 10) || 0;
    length = length || 2;
    while((input+'').length<length){
      input = '0'+input;
    }
    return input;
  };
})
.filter('sprintf', function() {
  'v1.0.0';
  return function(fmt) {
    var idx = 1;
    while (arguments[idx] !== undefined) {
      fmt = fmt.replace(/%[sdfxm]/i, arguments[idx++]);
    }
    return fmt;
  };
})
.filter('split', function() {
  'v1.0.0';
  return function(str, separator, idx) {
    separator = separator || ',';
    idx = idx || 0;
    if (str) {
      return str.split(separator)[idx];
    }
    return str;
  };
})
.filter('reverse', function() {
  'v1.0.0';
  return function(items) {
    if (items) {
      return items.slice().reverse();
    }
    return items;
  };
});

})();
