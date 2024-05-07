//Define a function create a car object with optional option
function create_cars (manufacture, model, ...option){
//Initialize acar object with manufacture and model
let car = {
    manufacturer : manufacture,
    model : model
};
//Add additional option to the car object

option.forEach(option =>{
    let [key, value] = option.split (":");
    car [key.trim()]= value.trim();
})
return car

}
//Call the function to create a car object

let my_car = create_cars("Toyata", "Carolla", "color: Black","sunroof : true");

//Print the variable to insure all the information is stored correctly in the car object
console.log(my_car);