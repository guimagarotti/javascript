for (let cont = 0; cont <= 10; cont++) {
    console.log(cont)
}


const cars = ['Ferrari', 'Tesla', 'Mercedes'];

for (let car of cars) {
    console.log(car)
}

cars.forEach(function(car,index) {
    console.log(index)
    console.log(car)
})

for (let c = 0; c < cars.length; c++) {
    console.log(cars[c])
}
