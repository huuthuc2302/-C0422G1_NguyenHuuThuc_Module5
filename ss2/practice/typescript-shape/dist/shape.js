"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    toString() {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}
exports.Shape = Shape;
const rectangle_1 = require("./rectangle");
const rectangle = new rectangle_1.Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());
//# sourceMappingURL=shape.js.map