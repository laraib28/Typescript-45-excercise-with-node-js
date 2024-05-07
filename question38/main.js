//Creating a function
function describe_cities(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, " is in ").concat(country));
}
// calling a function
describe_cities("karachi");
describe_cities("Lahore");
describe_cities("Berlin", "Germony");
