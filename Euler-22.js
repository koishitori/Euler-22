var httpObj = new XMLHttpRequest();
httpObj.open("get","https://projecteuler.net/project/resources/p022_names.txt",false);
httpObj.send(null);
var names = httpObj.responseText.replace(/"/g,"").split(",").sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;});
var ans = 0;
var A = "A".charCodeAt();
for( var i = 0; i < names.length; i++ ){
  var name = names[ i ];
  var temp = 0;
  for( var j = 0; j < name.length; j++ )
    temp += name[ j ].charCodeAt() - A + 1;
  ans += temp * ( i + 1 );
}
