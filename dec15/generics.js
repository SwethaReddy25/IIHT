//create a generics function display with one arg , which displays on the console the arg
//create a generics function which adds both the args and return a value of similar type
//create generics class which has  a map key of type K and value of type v
//map <string,number>  map<string,boolean> map<number,number>
function f1(args) {
    console.log(typeof args);
    return args;
}
console.log(f1("Hello World"));
function getItems(args) {
    return new Array().concat(args);
}
var arrNumber = getItems([10, 20, 30]);
var arrString = getItems(["Hello", "JavaTpoint"]);
console.log(arrNumber);
console.log(arrString);
var Maps = /** @class */ (function () {
    function Maps(map) {
        this.map = map;
    }
    Maps.prototype.setMap = function (map) {
        this.map = map;
    };
    Maps.prototype.getMap = function () {
        return this.map;
    };
    return Maps;
}());
//map <string,number>  map<string,boolean> map<number,number>
var map = new Map();
map.set("swetha", 1);
map.set('vamsi', 2);
var maps1 = new Maps(map);
var map2 = new Map();
map2.set("swetha", true);
map2.set('vamsi', false);
var maps2 = new Maps(map2);
var map3 = new Map();
map3.set(1, 1);
map3.set(2, 2);
var maps3 = new Maps(map3);
