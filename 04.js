function Electrodevice (){
    this.status = false;
    this.volt = 220;
}

Electrodevice.prototype.turnOnElectrodevice = function(){
    if (!this.status) {
        this.status = true;
    } 
    return;
}

Electrodevice.prototype.turnOffElectrodevice = function(){
    if (this.status) {
        this.status = false;
    } 
    return;
}

Electrodevice.prototype.calculatePower = function(amp){
    let watt = this.amp * this.volt;
    return console.log ('Прибор потребляет ' + watt+ ' Вт');
}

function Lamp (amp, serialNumber){
    this.amp = amp;
    this.serialNumber = serialNumber;
}

Lamp.prototype = new Electrodevice();
Lamp.prototype.getInfo = function(){
    console.log('Информация о приборе:');
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            console.log(key + ': '+this[key]);
        }
    }
    return;
}

function Television (amp, yearOfManufacture){
    this.amp = amp;
    this.yearOfManufacture = yearOfManufacture;
}

Television.prototype = new Electrodevice();
Television.prototype.getServiceLife = function(){
    let data = new Date();
    let currentYear = data.getFullYear();
    let serviceLife = currentYear - this.yearOfManufacture;
    return console.log ('Срок эксплуатации прибора - '+serviceLife+'(год/года/лет)');
}

function Teapot (amp){
    this.amp = amp;
    this.count = 0;
}

Teapot.prototype = new Electrodevice();
Teapot.prototype.boilIt = function(){
    return this.count++;
}
Teapot.prototype.countBoilIt = function(){
    return console.log ('Этот чайник кипятили ' +this.count+' раза/раз');
}

//*****ДЛЯ ТЕСТА*****

// const livingRoomLamp = new Lamp(0.5, 67697);
// const bedRoomLamp = new Lamp(1, 64774);
// const livingRoomTelevision = new Television(2, 1999);
// const kitchenTelevision = new Television(2, 2021);
// const kitchenTeapot = new Teapot(0.7);
// const livingRoomTeapot = new Teapot(0.8);

// livingRoomLamp.turnOnElectrodevice();
// console.log (livingRoomLamp.status);

// bedRoomLamp.turnOffElectrodevice();
// console.log (bedRoomLamp.status);

// kitchenTeapot.turnOnElectrodevice();
// console.log (kitchenTeapot.status);

// livingRoomTelevision.calculatePower();
// kitchenTelevision.calculatePower();
// livingRoomTeapot.calculatePower();

// livingRoomLamp.getInfo();
// bedRoomLamp.getInfo();

// livingRoomTelevision.getServiceLife();

// kitchenTeapot.boilIt();
// livingRoomTeapot.boilIt();
// livingRoomTeapot.boilIt();
// kitchenTeapot.boilIt();
// kitchenTeapot.boilIt();
// kitchenTeapot.countBoilIt();
// livingRoomTeapot.countBoilIt();