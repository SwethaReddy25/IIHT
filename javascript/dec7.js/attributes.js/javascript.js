
let i = 0;

function changeColor() {

    let ele = document.getElementById('p0');

    i++;

    if(i%2 == 0){

        ele.classList.add('p2');

    } else {

        ele.classList.remove('p2');

    }

}