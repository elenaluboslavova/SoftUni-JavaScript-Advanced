function carFactory(carInput) {
    const result = {};

    result.model = carInput.model;
    result.engine = buildEngine(carInput.power);
    result.carriage = { type: carInput.carriage, color: carInput.color };

    const wheelsArray = [0, 0, 0, 0];
    const wheelSize = carInput.wheelsize % 2 == 0 ? carInput.wheelsize - 1 : carInput.wheelsize;
    result.wheels = wheelsArray.fill(wheelSize);

    return result;

    function buildEngine(power){
        let output = {};
        if(power <= 120){
            if (power - 90 < 120 - power) {
                output.power = 90;
                output.volume = 1800;
            }
            else{
                output.power = 120;
                output.volume = 2400;
            }
        }
    
        else if(power <= 200){
            if (power - 120 < 200 - power) {
                output.power = 120;
                output.volume = 2400;
            }
            else{
                output.power = 200;
                output.volume = 3500;
            }
        }
    
        else{
            output.power = 200;
            output.volume = 3500;
        }

        return output;
    }
}

console.log(carFactory(
    { model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
));