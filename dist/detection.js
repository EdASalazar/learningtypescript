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
