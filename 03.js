function createObjectNoPrototype (){
    let obj = Object.create(null);
    return obj;
}

//*****ДЛЯ ТЕСТА*****

// const Cat = createObjectNoPrototype();

// console.log(Cat); 
// console.log(Object.getPrototypeOf(Cat)); 