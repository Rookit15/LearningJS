function Dogyear(){
    const myAge = 22; // Setiing my age
    let earlyYears = 2; // this will change troughout the program
    earlyYears *= 10.5;
    let laterYears = (myAge-2) *4;
    let myAgeInDogYears = laterYears+earlyYears;
    const myName = 'Atte'.toLowerCase();
    console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`)
}
Dogyear();