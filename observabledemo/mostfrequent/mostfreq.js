var arr1=[3,'s',4,'s',9,6,'s',9,'s',9,'s'];

var max=0, count=0;

var freq;

for(var i=0; i<arr1.length;i++){

    for(var j=i; j<arr1.length;j++){

        if(arr1[i]==arr1[j]){

            count++;

        }

        if(max<count){

            max=count;

            freq=arr1[i];

        }

    }

    count=0;

}

console.log(`${freq} ${max} repating`)