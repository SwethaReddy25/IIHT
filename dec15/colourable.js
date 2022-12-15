var newcolor = {
    color1: "blue",
    color2: "pink",
    color3: "orange",
    print: function () {
        console.log('Colors');
        console.log("".concat(this.color1, " ").concat(this.color2, " ").concat(this.color3));
    }
};
newcolor.print();
