fetch("https://jsonplaceholder.typicode.com/users/3").then (function(res){
    return res.json();

})
.then (function(data){
    console.log(data);
})
.catch(function(err){console.log(err)});