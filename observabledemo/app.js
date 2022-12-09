import {Observable} from 'rxjs';



const newOb = new Observable(

    subscriber=>{

        subscriber.next(5);

        subscriber.next(20);

        subscriber.next(50);

        setTimeout(()=>{

            subscriber.next(199);

            subscriber.complete();

        }, 2000);

    }

);



console.log("Subscribing");



newOb.subscribe({

    next(i){

        console.log(i);

    },

    error(e){

        console.log(e);

    },

    complete(){

        console.log("Completed");

    }

});