var car = /** @class */ (function () {
    function car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    car.prototype.show = function () {
        console.log("This car " + this.model + "has " + this.doors + " and is " + this.isElectric);
    };
    return car;
}());
var myCar = new car("Ciaz", 4, false);
myCar.show();
