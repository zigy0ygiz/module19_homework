function ownProperty (obj){
    console.log ("Собственные свойства объекта:");
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': '+obj[key]);
        }
    }
}

//*****ДЛЯ ТЕСТА*****

// const Cat = {
//     breed: "Maine coon",
//     weight: 30,
//     age: 10,
// }

// ownProperty (Cat);