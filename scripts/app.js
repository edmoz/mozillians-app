var json = $.getJSON("http://people.mozilla.org/~ewong2/data.json");
var data = eval("(" +json.responseText + ")");
document.write(data["a"]);
console.log('foo'+data);