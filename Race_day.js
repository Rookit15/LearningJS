function RaceDay(){
    let raceNumber = Math.floor(Math.random() * 1000);
    let registered=true;
    let runnersAge = 25;
    if (runnersAge>=18 && registered){
        raceNumber+=1000
        
    };
    if(runnersAge>18 && registered){
        console.log('Your race time is 9:30 am and your race number is '+raceNumber);
    }else if(runnersAge>18 && !registered){
        console.log('Your race time is 11:00 am and your race number is '+raceNumber);

    }else if(runnersAge<18){
        console.log('Your race time is 12:30 pm and your race number is '+raceNumber);
    }else {
        console.log('Check in with registration desk');
    }
}

RaceDay();