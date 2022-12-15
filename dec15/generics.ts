//create a generics function display with one arg , which displays on the console the arg

//create a generics function which adds both the args and return a value of similar type

//create generics class which has  a map key of type K and value of type v
//map <string,number>  map<string,boolean> map<number,number>

function f1<T>(args:T):T{
    console.log(typeof args);
    return args;

}
console.log(f1<string>("Hello World"));

function getItems<T>(args : T[] ) : T[] {  
    return new Array<T>().concat(args);  
}  
let arrNumber = getItems<number>([10, 20, 30]);  
let arrString = getItems<string>(["Hello", "JavaTpoint"]);  
console.log(arrNumber);  
console.log(arrString);  
class Maps<K,V>{

    private map:Map<K,V>;

    constructor(map:Map<K,V>){

        this.map=map;

    }

    setMap(map:Map<K,V>){

        this.map=map;

    }

    getMap(){

        return this.map;

    }

}



//map <string,number>  map<string,boolean> map<number,number>

let map=new Map<string, number>();

map.set("swetha",1);

map.set('vamsi',2);

let maps1=new Maps<string, number>(map);



let map2=new Map<string, boolean>();

map2.set("swetha",true);

map2.set('vamsi',false);

let maps2=new Maps<string, boolean>(map2);



let map3=new Map<number, number>();

map3.set(1,1);

map3.set(2,2);

let maps3=new Maps<number, number>(map3);