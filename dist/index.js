"use strict";
let age = 20;
age = 1;
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value === undefined || value < 0) {
            throw Error("Value needs to be above 0");
        }
        this._x = value;
    }
    get y() {
        return this._y;
    }
}
const point = new Point(23, 32);
point.x = 1;
console.log(point.x);
