//Define a function create a car object with optional option
function create_cars(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    //Initialize acar object with manufacture and model
    var car = {
        manufacturer: manufacture,
        model: model
    };
    //Add additional option to the car object
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object
var my_car = create_cars("Toyata", "Carolla", "color: Black", "sunroof : true");
//Print the variable to insure all the information is stored correctly in the car object
console.log(my_car);
