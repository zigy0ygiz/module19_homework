function presenceProperty (property, obj){
    for (let key in obj) {
        if (key === property){
            return true;
        }
    }
    return false
}

//*****ДЛЯ ТЕСТА*****

// const Cat = {
//     breed: "Maine coon",
//     weight: 30,
//     age: 10,
// }

// console.log (presenceProperty("breed", Cat));
// console.log (presenceProperty("taste", Cat));