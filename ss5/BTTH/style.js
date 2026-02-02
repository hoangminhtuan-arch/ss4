let inputNumber = Number(prompt(`Nhap vao mot so`)) 

if(inputNumber %2 == 0) {
    console.log(`So ${inputNumber} la so chan`);
    
}else{
    console.log(`So ${inputNumber} la so le`);
}

if (inputNumber > 0){
    console.log(`So ${inputNumber} la so duong`);
    for(let i = 0; i <= inputNumber; i++){
        console.log(`So ${i}`);
    }
}else if(inputNumber < 0){
    console.log(`So ${inputNumber} la so am`);
}else{
    console.log(`La so 0`);
    
}

switch (true) {
    case (inputNumber % 3 === 0 && inputNumber % 5 === 0):
        console.log("FizzBuzz");
        break;

    case (inputNumber % 3 === 0):
        console.log("Fizz");
        break;

    case (inputNumber % 5 === 0):
        console.log("Buzz");
        break;

    default:
        console.log("Chính là số đó");
}
