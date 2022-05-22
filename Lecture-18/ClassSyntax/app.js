

class Car{

    constructor(name,price,isDiscBrake) {
        this.name = name;
        this.price = price;
        this.isDiscBrake = isDiscBrake;
    }

    // Normal Method
    getCarName() {
        console.log(`Car name is :${this.name}`);
    }

    get getPrice() {
        return this.price;
    }

    set setIsDiscBrake(brake) {
        this.isDiscBrake = brake;
    }

    static sayHello() {
        console.log("Hello from car class");
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            this.price = 0;
        } else {
            this.price = newPrice;   
        }
    }

}

class RacingCar extends Car{
    constructor(name, price, isDiscBrake, maxSpeed, color) {
        super(name, price, isDiscBrake); // this will call the parent class constructor
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}

const c1 = new Car('BMW', 100, true);

const r1 = new RacingCar('Ferrari', 400, false, 500, 'Red');