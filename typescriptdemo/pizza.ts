export {}
enum Size  {
    small,
    medium,
    large,
    standard
}
enum Toppings{
    cheese,
    corn,
    onion,
    panner,
    chicken
}


interface Pizza{
    id:number,
    base:string,
    toppings:Toppings,
    size:Size
}

let P1:Pizza, P2:Pizza , P3:Pizza , P4:Pizza

P1={

    id:1,
    base:"Pan Base",
    toppings:Toppings.panner,
    size:Size.large
};
P2={

    id:2,
    base:"Pan Base",
    toppings:Toppings.chicken,
    size:Size.small
};

P3={

    id:3,
    base:"Pan Base",
    toppings:Toppings.corn,
    size:Size.medium
};

P4={

    id:4,
    base:"Pan Base",
    toppings:Toppings.onion,
    size:Size.large
};

function outForDelivery(pizzas:Pizza[]){
    for(let i:number=0;i<pizzas.length;i++)
        {
      let pizza:Pizza;
      pizza=pizzas[i];
        


    
      switch(pizza.toppings) {
        case Toppings.panner:
            console.log(`${Toppings[Toppings.panner]} pizza out for delivery.`)
        //console.log('Pizza with panner is out for delivery',Toppings.panner);
        break;
        case Toppings.chicken:
            console.log(`${Toppings[Toppings.chicken]} pizza out for delivery.`)
        //console.log('Pizza with chicken is out for delivery',Toppings.chicken);
        break;
    
        case Toppings.corn:
            console.log(`${Toppings[Toppings.corn]} pizza out for delivery.`)
        //console.log('Pizza with corn is getting perpared',Toppings.corn);``
        break;
      
        case Toppings.onion:
            console.log(`${Toppings[Toppings.onion]} pizza out for delivery.`)
       // console.log(Pizza with onion is out for delivery, Toppings.onion);
        break;
        default:
            console.log(Toppings[pizza.toppings]);
      }
    }
}
    let pizza:Pizza[];
    pizza=[P1,P2,P3,P4];
    outForDelivery(pizza);
