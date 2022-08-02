import {ctx} from "/canvas.js"

//create class Car
class Car{
    constructor(options, speed, max){
        this.pos = options.pos;
        this.size = options.size;
        this.color = options.color;
        this.speed = speed;
        this.maxi = max
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
        console.log(this.pos[0]);
    }

    move(){
        if(this.pos[0] < this.maxi){
            this.pos[0] = this.pos[0] + this.speed;
        }else{
            console.log("why you comming fucking fast?")
        }
    }
}

let usrColor = "";
let usrSpeed = 0;
let usrMax = 0;

var audi = new Car({pos: [10,10], size: [50,20], color: usrColor}, usrSpeed, usrMax);

//function wich draws, moves and deletes
function drawAndMove(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    audi.draw();
    audi.move();
}

function setcol(){
    usrSpeed = parseInt(document.getElementById("speedId").value);
    usrColor = document.getElementById("farbId").value;
    usrMax = parseInt(document.getElementById("maxSpeedId").value);
    audi.color = usrColor; 
    audi.speed = usrSpeed;
    audi.maxi = usrMax;
}

//function witch starts process of drawAndMove every second
function interV(){
    setInterval(drawAndMove, 1000);
}

//makes value of text empty
function klar(){
    document.getElementById(event.target.id).value = "";
}

//event listeners 
document.getElementById("festId").addEventListener("click", setcol);
document.getElementById("subId").addEventListener("click", interV);

document.getElementById("farbId").addEventListener("click", klar);
document.getElementById("speedId").addEventListener("click", klar);
document.getElementById("maxSpeedId").addEventListener("click", klar)
