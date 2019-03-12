exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
var environment_1 = __webpack_require__(/*! ./environment */ "./src/environment.ts");
var resolvers_1 = __importDefault(__webpack_require__(/*! ./resolvers */ "./src/resolvers.ts"));
var schemas_1 = __importDefault(__webpack_require__(/*! ./schemas */ "./src/schemas.ts"));
var server = new apollo_server_1.ApolloServer({
    resolvers: resolvers_1.default,
    typeDefs: schemas_1.default,
    introspection: environment_1.environment.apollo.introspection,
    playground: environment_1.environment.apollo.playground,
    mocks: true,
    mockEntireSchema: false
});
server.listen(environment_1.environment.port)
    .then(function (_a) {
    var url = _a.url;
    return console.log("Server ready at " + url + ". ");
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.stop(); });
}


/***/ }),

/***/ "./src/schemas.ts":
/*!************************!*\
  !*** ./src/schemas.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    \"\"\"\n    Test Message. \n    \"\"\"\n    testMessage: String!\n    myMessage: Boolean\n    person: [Person]\n  }\n  type Person {\n    name: String\n    age: Int\n    mal\n  }\n"], ["\n  type Query {\n    \"\"\"\n    Test Message. \n    \"\"\"\n    testMessage: String!\n    myMessage: Boolean\n    person: [Person]\n  }\n  type Person {\n    name: String\n    age: Int\n    mal\n  }\n"])));
var templateObject_1;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUMzQyxrQ0FBa0MsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyxzQkFBc0IsRUFBRTtBQUM1RDs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0MscUhBQXFILHlIQUF5SCxpQkFBaUIsOENBQThDLHdCQUF3Qix5SEFBeUgsaUJBQWlCLDhDQUE4QztBQUM3ZiIsImZpbGUiOiJtYWluLjJlN2EyODkyNmExZTM5NmJhNzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbnZhciBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIi4vZW52aXJvbm1lbnRcIik7XG52YXIgcmVzb2x2ZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVzb2x2ZXJzXCIpKTtcbnZhciBzY2hlbWFzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2NoZW1hc1wiKSk7XG52YXIgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfMS5BcG9sbG9TZXJ2ZXIoe1xuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzXzEuZGVmYXVsdCxcbiAgICB0eXBlRGVmczogc2NoZW1hc18xLmRlZmF1bHQsXG4gICAgaW50cm9zcGVjdGlvbjogZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5hcG9sbG8uaW50cm9zcGVjdGlvbixcbiAgICBwbGF5Z3JvdW5kOiBlbnZpcm9ubWVudF8xLmVudmlyb25tZW50LmFwb2xsby5wbGF5Z3JvdW5kLFxuICAgIG1vY2tzOiB0cnVlLFxuICAgIG1vY2tFbnRpcmVTY2hlbWE6IGZhbHNlXG59KTtcbnNlcnZlci5saXN0ZW4oZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5wb3J0KVxuICAgIC50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB1cmwgPSBfYS51cmw7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiU2VydmVyIHJlYWR5IGF0IFwiICsgdXJsICsgXCIuIFwiKTtcbn0pO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXIuc3RvcCgpOyB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwb2xsb19zZXJ2ZXJfMS5ncWwodGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgdHlwZSBRdWVyeSB7XFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBUZXN0IE1lc3NhZ2UuIFxcbiAgICBcXFwiXFxcIlxcXCJcXG4gICAgdGVzdE1lc3NhZ2U6IFN0cmluZyFcXG4gICAgbXlNZXNzYWdlOiBCb29sZWFuXFxuICAgIHBlcnNvbjogW1BlcnNvbl1cXG4gIH1cXG4gIHR5cGUgUGVyc29uIHtcXG4gICAgbmFtZTogU3RyaW5nXFxuICAgIGFnZTogSW50XFxuICAgIG1hbFxcbiAgfVxcblwiXSwgW1wiXFxuICB0eXBlIFF1ZXJ5IHtcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIFRlc3QgTWVzc2FnZS4gXFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICB0ZXN0TWVzc2FnZTogU3RyaW5nIVxcbiAgICBteU1lc3NhZ2U6IEJvb2xlYW5cXG4gICAgcGVyc29uOiBbUGVyc29uXVxcbiAgfVxcbiAgdHlwZSBQZXJzb24ge1xcbiAgICBuYW1lOiBTdHJpbmdcXG4gICAgYWdlOiBJbnRcXG4gICAgbWFsXFxuICB9XFxuXCJdKSkpO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iXSwic291cmNlUm9vdCI6IiJ9