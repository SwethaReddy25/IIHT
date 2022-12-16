function alternateCap(str){

    let ans="";

    for(let i=0;i<str.length;i++){

        if(i%2!=0){

            ans+=str[i].toUpperCase();

        }else{

            ans+=str[i];

        }

    }

    return ans;

}



function isEven(num){

    return num%2==0;

}

function isPrime(num){

    for(let i=2;i<num;i++){

        if(num%i==0)

        return false;

    }



    return true;

}
module.exports={alternateCap,isEven,isPrime};
