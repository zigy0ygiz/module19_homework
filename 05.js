class Electrodevice {
    constructor(){
        this.status = false;
        this.volt = 220;
    }

    turnOnElectrodevice(){
        if (!this.status) {
            this.status = true;
        } 
        return;
    }

    turnOffElectrodevice(){
        if (this.status) {
            this.status = false;
        } 
        return;
    }

    calculatePower(amp){
        let watt = this.amp * this.volt;
        return console.log ('Прибор потребляет ' + watt+ ' Вт');
    }
}

class Lamp extends Electrodevice {
    constructor(amp, serialNumber){
        super();
        this.amp = amp;
        this.serialNumber = serialNumber;
    }

    getInfo(){
        console.log('Информация о приборе:');
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(key + ': '+this[key]);
            }
        }
        return;
    }
}

class Television extends Electrodevice {
    constructor(amp, yearOfManufacture){
        super();
        this.amp = amp;
        this.yearOfManufacture = yearOfManufacture;
    }

    getServiceLife(){
        let data = new Date();
        let currentYear = data.getFullYear();
        let serviceLife = currentYear - this.yearOfManufacture;
        return console.log ('Срок эксплуатации прибора - '+serviceLife+'(год/года/лет)');
    }
}

class Teapot extends Electrodevice {
    constructor(amp){
        super();
        this.amp = amp;
        this.count = 0;
    }

    boilIt(){
        return this.count++;
    }

    countBoilIt(){
        return console.log ('Этот чайник кипятили ' +this.count+' раза/раз');
    }
}



//*****ДЛЯ ТЕСТА*****

const livingRoomLamp = new Lamp(0.5, 67697);
const bedRoomLamp = new Lamp(1, 64774);
const livingRoomTelevision = new Television(2, 1999);
const kitchenTelevision = new Television(2, 2021);
const kitchenTeapot = new Teapot(0.7);
const livingRoomTeapot = new Teapot(0.8);

livingRoomLamp.turnOnElectrodevice();
console.log (livingRoomLamp.status);

bedRoomLamp.turnOffElectrodevice();
console.log (bedRoomLamp.status);

kitchenTeapot.turnOnElectrodevice();
console.log (kitchenTeapot.status);

livingRoomTelevision.calculatePower();
kitchenTelevision.calculatePower();
livingRoomTeapot.calculatePower();

livingRoomLamp.getInfo();
bedRoomLamp.getInfo();

livingRoomTelevision.getServiceLife();

kitchenTeapot.boilIt();
livingRoomTeapot.boilIt();
livingRoomTeapot.boilIt();
kitchenTeapot.boilIt();
kitchenTeapot.boilIt();
kitchenTeapot.countBoilIt();
livingRoomTeapot.countBoilIt();