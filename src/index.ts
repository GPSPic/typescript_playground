let age: number = 20;
age = 1

class Point {
    constructor(private _x?: number, private _y?: number) {}

    get x() {
        return this._x;
    }

    set x(value: number) {
        if (value < 0) {
            throw Error("Value needs to be above 0")
        }
        this._x = value;
    }

    get y() {
        return this._y;
    }
}

const point = new Point(23,32);
point.x = 1;
// point.x = undefined;
console.log(point.x);


