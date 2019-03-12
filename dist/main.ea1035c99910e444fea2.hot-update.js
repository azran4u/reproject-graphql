exports.id = "main";
exports.modules = {

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
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    \"\"\"\n    Test Message. \n    \"\"\"\n    testMessage: String!\n    myMessage: Boolean\n    person: [Person]\n  }\n  type Person {\n    name: String\n    age: Int\n    \n  }\n"], ["\n  type Query {\n    \"\"\"\n    Test Message. \n    \"\"\"\n    testMessage: String!\n    myMessage: Boolean\n    person: [Person]\n  }\n  type Person {\n    name: String\n    age: Int\n    \n  }\n"])));
var templateObject_1;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSxnQ0FBZ0MsdUNBQXVDLGFBQWEsRUFBRSxFQUFFLE9BQU8sa0JBQWtCO0FBQ2pIO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxxSEFBcUgseUhBQXlILGlCQUFpQiwyQ0FBMkMsd0JBQXdCLHlIQUF5SCxpQkFBaUIsMkNBQTJDO0FBQ3ZmIiwiZmlsZSI6Im1haW4uZWExMDM1Yzk5OTEwZTQ0NGZlYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwb2xsb19zZXJ2ZXJfMS5ncWwodGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgdHlwZSBRdWVyeSB7XFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBUZXN0IE1lc3NhZ2UuIFxcbiAgICBcXFwiXFxcIlxcXCJcXG4gICAgdGVzdE1lc3NhZ2U6IFN0cmluZyFcXG4gICAgbXlNZXNzYWdlOiBCb29sZWFuXFxuICAgIHBlcnNvbjogW1BlcnNvbl1cXG4gIH1cXG4gIHR5cGUgUGVyc29uIHtcXG4gICAgbmFtZTogU3RyaW5nXFxuICAgIGFnZTogSW50XFxuICAgIFxcbiAgfVxcblwiXSwgW1wiXFxuICB0eXBlIFF1ZXJ5IHtcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIFRlc3QgTWVzc2FnZS4gXFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICB0ZXN0TWVzc2FnZTogU3RyaW5nIVxcbiAgICBteU1lc3NhZ2U6IEJvb2xlYW5cXG4gICAgcGVyc29uOiBbUGVyc29uXVxcbiAgfVxcbiAgdHlwZSBQZXJzb24ge1xcbiAgICBuYW1lOiBTdHJpbmdcXG4gICAgYWdlOiBJbnRcXG4gICAgXFxuICB9XFxuXCJdKSkpO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iXSwic291cmNlUm9vdCI6IiJ9