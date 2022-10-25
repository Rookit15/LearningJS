function Kelvin(){
    // Kelvin is set to const and it will not change during program
    const kelvin = 0;
    // celsius is kelvin degrees but minus 273
    let celsius = kelvin - 273;
    let fahrenheit = Math.floor((celsius * (9/5) + 32));
    let Newton = Math.floor(celsius* (33/100));
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
    console.log(`The temperature is ${Newton} degrees Newton.`)
    console.log(`The temperature is ${celsius} degrees in Celsius.`)
    return null
}
Kelvin();