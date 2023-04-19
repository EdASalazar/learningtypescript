"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLocaleUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
