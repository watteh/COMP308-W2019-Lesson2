var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this.age = age;
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            // public properties
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        Person.prototype.saysHello = function () {
            console.log("%c " + this.name + " says hello!", "font-size: 20px; color: blue; font-weight:bold;");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map