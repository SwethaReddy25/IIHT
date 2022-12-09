fetch("https://jsonplaceholder.typicode.com/users").then (function(res){

    return res.json();

})

.then (function(data){

    console.log(data);

})

.catch(function(err){console.log(err)});

async function fetch2() {
    let response =await fetch(input="https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    console.log(data)

}
fetch2();
  


let data={

    title:"happy starting",

    body:"heartfelt",

    user_id:1

}

let post2={

    title:"happy endings",

    body:" life ",

    user_id:1

}

fetch('https://jsonplaceholder.typicode.com/posts',{

    method:"POST",

    body: JSON.stringify(data),

    headers: {"Content-type":"application/json"}

}).then(response =>response.json())

    .then(json=>console.log(json))

    .catch(err=>console.log(err))

async function post(){

    let response= await fetch('https://jsonplaceholder.typicode.com/posts',{

        method:"POST",

        body: JSON.stringify(post2),

        headers: {"Content-type":"application/json"}

    })

    let data = await response.json()

    console.log(data)

}

post()


