let na=document.getElementById("name");



na.addEventListener("blur",fn,true);




function fn(){

    console.log(document.getElementById("name").value);

}