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
    constructor(brand, speed, maxSpeed, currentSpeed){
        this.carBrand = brand;
        this.carSpeed = speed;
        this.carMaxSpeed = maxSpeed;
        this.carCurrentSpeed = currentSpeed;
        this.crashed = false;
    }
    drive(){
        if(this.carCurrentSpeed >= this.carMaxSpeed){
            
            this.crashed= true;

            if (finishedLoop === 1){
                console.log(this.carBrand + " needs " + carTime1 + " seconds to get from 0 km/h to " + this.carMaxSpeed + " km/h");
            }else if(finishedLoop === 2){
                console.log(this.carBrand + " needs " + carTime2 + " seconds to get from 0 km/h to " + this.carMaxSpeed + " km/h");
            }else if(finishedLoop === 3){
                console.log(this.carBrand + " needs " + carTime3 + " seconds to get from 0 km/h to " + this.carMaxSpeed + " km/h");
            }

        }else{
            this.carCurrentSpeed = this.carCurrentSpeed + this.carSpeed;
            console.log(this.carBrand + " has a speed of " + this.carCurrentSpeed + " km/h");

            if (finishedLoop === 1){
                carTime1++;
            }else if(finishedLoop === 2){
                carTime2++;
            }else if(finishedLoop === 3){
                carTime3++;
            }

        }
    }    
}

let finishedLoop = 0;

//gameloop
for(var i = 0; i < 3; i++){
    
    finishedLoop++;
    
    if (finishedLoop === 1){
        var carTime1 = 0;
    }else if(finishedLoop === 2){
        var carTime2 = 0;
    }else if(finishedLoop === 3){
        var carTime3 = 0;
    }

    //infos from usr
    let brand = prompt("what brand is your car? ");
    let speed = parseInt(prompt("How much speed does your car gain per second? "));
    let maxSpeed = parseInt(prompt("what is the maximum speed of your car? "));

    //create Object
    var usrCar = new Car(brand, speed, maxSpeed, 0);

    //create while loop  
    while (usrCar.crashed == false){
        usrCar.drive()
        sleep(1000)
    }


    if (finishedLoop == 3){
        if (usrCar.crashed == true){
            if (carTime1 < carTime2 && carTime1 < carTime3){
                console.log("Car 1 was the fastest");
            }else if(carTime2 < carTime1 && carTime2 < carTime3){
                console.log("Car 2 was the fastest");
            }else if(carTime3 < carTime1 && carTime3 < carTime2){
                console.log("Car 3 was the fastets");
            }
        }
    }
}


