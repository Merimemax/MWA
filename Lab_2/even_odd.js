Array.prototype.even = function(){
    
    var temp = new Array();
    var arr = this;
    setTimeout(function(){
        temp.push(arr.filter(function(number) {
            return number % 2 === 0;
          }));
        console.log("even " + temp);
    }, 0)
}
Array.prototype.odd = function(){
    var temp = new Array();
    var arr = this;
    setTimeout(function(){
        temp.push(arr.filter(function(number) {
            return number % 2 !== 0;
          }));
        console.log("Odd " + temp);
    }, 0)
}
console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');