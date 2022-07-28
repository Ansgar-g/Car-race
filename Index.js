//require prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

//basic sleep function 
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//Auto class
class Car{
    constructor(brand, speed, distance, current){
        this.carBrand = brand;
        this.carSpeed = speed;
        this.raceDistance = distance;
        this.carCurrent = current;
        this.crashed = false;
    }
    drive(){
        if(this.carCurrent >= this.raceDistance){
            this.crashed= true;
            console.log(time);
        }else{
            this.carCurrent = this.carCurrent + this.carSpeed;
            console.log(this.carBrand + " has driven " + this.carCurrent + " m");
            time++;
        }
    }    
}

let over = false;
let run = 0;
let winner = ["", 0];

//distance of the race
const distance = parseInt(prompt("distance? "));

while(over === false){
    var time = 0;
    run++;

    //get user information
    let brand = prompt("What brand is ur car from? ");
    let speed = parseInt(prompt("How much meters does ur car drive per second? "));
    
    //create new object
    usrCar = new Car(brand, speed, distance, 0);

    while (usrCar.crashed == false){
        usrCar.drive();
        sleep(1000);
    }    

    if(run === 1){
        winner[1] = time;
        winner[0] = usrCar.carBrand;
    }

    if(1 < run){
        if(time < winner[1]){
            winner[1] = time;
            winner[0] = usrCar.carBrand;
        }
    }    
    let last = prompt("was that your last participant?[y/N] ");

    if (last === "y"){
        over = true;
        console.log(winner[0] + " needed " + winner[1] + " seconds, so he won");
    }
}
