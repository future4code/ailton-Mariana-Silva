"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "ADMIN";
    ROLES["NORMAL"] = "NORMAL";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
exports.users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: ROLES.ADMIN,
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: ROLES.NORMAL,
        age: 36,
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: ROLES.NORMAL,
        age: 21,
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: ROLES.NORMAL,
        age: 17,
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: ROLES.ADMIN,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: ROLES.ADMIN,
        age: 60,
    },
];
//# sourceMappingURL=data.js.map