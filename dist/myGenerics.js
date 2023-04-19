"use strict";
// const score: Array<number> = []
// const names: Array<string> = []
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCard(product) {
        this.cart.push(product);
    }
}
