function average(arr){
    var sum=0;
  arr.forEach(function(i){
     sum+=i;
  });
  var average=sum/arr.length;
  console.log(average);
}

var scores=[90,98,89,100,100,86,94];
average(scores);

var scores2=[40,65,77,82,80,73,54,63,95,49];
average(scores2);