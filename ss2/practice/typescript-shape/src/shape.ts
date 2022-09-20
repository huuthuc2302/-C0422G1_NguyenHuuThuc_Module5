export class Shape {
    private _x: number;

    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get y() {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    toString(): string {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}

import {Rectangle} from "./rectangle";
const rectangle = new Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());