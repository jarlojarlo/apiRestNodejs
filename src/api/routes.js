"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRestRoutes = void 0;
const components_1 = require("./components");
function initRestRoutes(router) {
    const prefix = '/api/vq';
    components_1.registerApiRoutes(router, prefix);
}
exports.initRestRoutes = initRestRoutes;
