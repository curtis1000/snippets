/**
 * The functional pattern allows for JavaScript to achieve both inheritance and information hiding 
 * (private variables) with a compact syntax. 
 *
 * The specification that is passed in, as well as potentially more vars you may define in each pseudo-class, are not
 * accessible from the object that is returned, we consider these private variables. Public vars may 
 * be added to the "that" return object as desired.
 */
 
/**
 * Person is our base pseudo-class
 * @param spec
 * @returns {{}}
 */
var person = function (spec) {
 
    // set spec defaults
    spec.name = spec.name || '';
 
    // setup the return object, empty object literal in our base pseudo-class
    var that = {};
 
    // add public capabilities
    that.getName = function () {
        return spec.name;
    };
 
    return that;
};
 
/**
 * Employee pseudo-class inherits from Person
 * @param spec
 * @returns {*}
 */
var employee = function (spec) {
 
    // set spec defaults
    spec.employeeId = spec.employeeId || 0;
 
    // setup the return object, call to the parent pseudo-class, "person"
    var that = person(spec);
 
    // add public capabilities
    that.getEmployeeId = function () {
        return spec.employeeId;
    }
 
    return that;
};
 
var curt = employee({name: 'Curtis Branum', employeeId: '207'});
 
// console-logging the "curt" object won't reveal any private properties, you must use the getters to access them
console.log(curt, curt.getName(), curt.getEmployeeId());
