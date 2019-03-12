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
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    \"\"\"\n    Test Message. \n    \"\"\"\n    testMessage: String!\n    myMessage: Boolean\n    person: [Person]\n  }\n  type Person {\n    name: String\n    age: Int\n    male: boolean\n  }\n"], ["\n  type Query {\n    \"\"\"\n    Test Message. \n    \"\"\"\n    testMessage: String!\n    myMessage: Boolean\n    person: [Person]\n  }\n  type Person {\n    name: String\n    age: Int\n    male: boolean\n  }\n"])));
var templateObject_1;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUMzQyxrQ0FBa0MsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyxzQkFBc0IsRUFBRTtBQUM1RDs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0MscUhBQXFILHlIQUF5SCxpQkFBaUIsd0RBQXdELHdCQUF3Qix5SEFBeUgsaUJBQWlCLHdEQUF3RDtBQUNqaEIiLCJmaWxlIjoibWFpbi41MmQ2NDdmZDc0ZGVmOTZhZTYwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG52YXIgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCIuL2Vudmlyb25tZW50XCIpO1xudmFyIHJlc29sdmVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Jlc29sdmVyc1wiKSk7XG52YXIgc2NoZW1hc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NjaGVtYXNcIikpO1xudmFyIHNlcnZlciA9IG5ldyBhcG9sbG9fc2VydmVyXzEuQXBvbGxvU2VydmVyKHtcbiAgICByZXNvbHZlcnM6IHJlc29sdmVyc18xLmRlZmF1bHQsXG4gICAgdHlwZURlZnM6IHNjaGVtYXNfMS5kZWZhdWx0LFxuICAgIGludHJvc3BlY3Rpb246IGVudmlyb25tZW50XzEuZW52aXJvbm1lbnQuYXBvbGxvLmludHJvc3BlY3Rpb24sXG4gICAgcGxheWdyb3VuZDogZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5hcG9sbG8ucGxheWdyb3VuZCxcbiAgICBtb2NrczogdHJ1ZSxcbiAgICBtb2NrRW50aXJlU2NoZW1hOiBmYWxzZVxufSk7XG5zZXJ2ZXIubGlzdGVuKGVudmlyb25tZW50XzEuZW52aXJvbm1lbnQucG9ydClcbiAgICAudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdXJsID0gX2EudXJsO1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlNlcnZlciByZWFkeSBhdCBcIiArIHVybCArIFwiLiBcIik7XG59KTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyLnN0b3AoKTsgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG5leHBvcnRzLmRlZmF1bHQgPSBhcG9sbG9fc2VydmVyXzEuZ3FsKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIHR5cGUgUXVlcnkge1xcbiAgICBcXFwiXFxcIlxcXCJcXG4gICAgVGVzdCBNZXNzYWdlLiBcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIHRlc3RNZXNzYWdlOiBTdHJpbmchXFxuICAgIG15TWVzc2FnZTogQm9vbGVhblxcbiAgICBwZXJzb246IFtQZXJzb25dXFxuICB9XFxuICB0eXBlIFBlcnNvbiB7XFxuICAgIG5hbWU6IFN0cmluZ1xcbiAgICBhZ2U6IEludFxcbiAgICBtYWxlOiBib29sZWFuXFxuICB9XFxuXCJdLCBbXCJcXG4gIHR5cGUgUXVlcnkge1xcbiAgICBcXFwiXFxcIlxcXCJcXG4gICAgVGVzdCBNZXNzYWdlLiBcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIHRlc3RNZXNzYWdlOiBTdHJpbmchXFxuICAgIG15TWVzc2FnZTogQm9vbGVhblxcbiAgICBwZXJzb246IFtQZXJzb25dXFxuICB9XFxuICB0eXBlIFBlcnNvbiB7XFxuICAgIG5hbWU6IFN0cmluZ1xcbiAgICBhZ2U6IEludFxcbiAgICBtYWxlOiBib29sZWFuXFxuICB9XFxuXCJdKSkpO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iXSwic291cmNlUm9vdCI6IiJ9