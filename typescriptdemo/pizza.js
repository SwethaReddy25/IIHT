"use strict";
exports.__esModule = true;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
    Size[Size["standard"] = 3] = "standard";
})(Size || (Size = {}));
var Toppings;
(function (Toppings) {
    Toppings[Toppings["cheese"] = 0] = "cheese";
    Toppings[Toppings["corn"] = 1] = "corn";
    Toppings[Toppings["onion"] = 2] = "onion";
    Toppings[Toppings["panner"] = 3] = "panner";
    Toppings[Toppings["chicken"] = 4] = "chicken";
})(Toppings || (Toppings = {}));
var P1, P2, P3, P4;
P1 = {
    id: 1,
    base: "Pan Base",
    toppings: Toppings.panner,
    size: Size.large
};
P2 = {
    id: 2,
    base: "Pan Base",
    toppings: Toppings.chicken,
    size: Size.small
};
P3 = {
    id: 3,
    base: "Pan Base",
    toppings: Toppings.corn,
    size: Size.medium
};
P4 = {
    id: 4,
    base: "Pan Base",
    toppings: Toppings.onion,
    size: Size.large
};
function outForDelivery(pizzas) {
    for (var i = 0; i < pizzas.length; i++) {
        var pizza_1 = void 0;
        pizza_1 = pizzas[i];
        switch (pizza_1.toppings) {
            case Toppings.panner:
                console.log("".concat(Toppings[Toppings.panner], " pizza out for delivery."));
                //console.log('Pizza with panner is out for delivery',Toppings.panner);
                break;
            case Toppings.chicken:
                console.log("".concat(Toppings[Toppings.chicken], " pizza out for delivery."));
                //console.log('Pizza with chicken is out for delivery',Toppings.chicken);
                break;
            case Toppings.corn:
                console.log("".concat(Toppings[Toppings.corn], " pizza out for delivery."));
                //console.log('Pizza with corn is getting perpared',Toppings.corn);``
                break;
            case Toppings.onion:
                console.log("".concat(Toppings[Toppings.onion], " pizza out for delivery."));
                // console.log(Pizza with onion is out for delivery, Toppings.onion);
                break;
            default:
                console.log(Toppings[pizza_1.toppings]);
        }
    }
}
var pizza;
pizza = [P1, P2, P3, P4];
outForDelivery(pizza);
