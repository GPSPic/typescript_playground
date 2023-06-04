var age = 20;
age = 1;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value === undefined || value < 0) {
                throw Error("Value needs to be above 0");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point();
point.x = 1;
point.x = undefined;
console.log(point.x);
