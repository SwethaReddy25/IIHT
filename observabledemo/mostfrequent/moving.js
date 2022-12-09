function moveArr(arr, bef_ind, aft_ind) {

    while (bef_ind < 0) {

        bef_ind += arr.length;

    }

    while (aft_ind < 0) {

        aft_ind += arr.length;

    }

    if (aft_ind >= arr.length) {

        var j = aft_ind - arr.length;

        while ((j--) + 1) {

            arr.push();

        }

    }

     arr.splice(aft_ind, 0, arr.splice(bef_ind, 1)[0]);  

   return arr;

}

console.log('Array After Move:');

console.log(moveArr([10, 20, 30, 40, 50], 0, 2));

console.log('Array After Move:');

console.log(moveArr([10, 20, 30, 40, 50], -1, -2));