"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
function* waitFor(selectEffect) {
    if (yield selectEffect) {
        return true;
    }
    while (true) {
        yield effects_1.take('*');
        if (yield selectEffect) {
            return true;
        }
    }
}
exports.waitFor = waitFor;
