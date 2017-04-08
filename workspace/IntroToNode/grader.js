function average(num) {
    var total = 0;
    num.forEach(function(score){
        total += score;
    });
    var avg = total/num.length;
    
    return Math.round(avg);
}
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));