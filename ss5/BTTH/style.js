let inputNumber = Number(prompt(`Nhap vao mot so`)) 

if(inputNumber %2 ==0) {
    alert(`So ${inputNumber} la so duong!!!`);
}else if (
    alert(`So ${inputNumber} la so am!!!`)
)
if(inputNumber > 0){
    alert(`La so duong`)
}else if( inputNumber < 0){
    alert(`La so am`)
}else(
    alert(`Bang 0`)
)

while(inputNumber > 0){
    for( let i = 0; i <= inputNumber; i++){
        console.log(`So ${i}`);
    }
    break;
}

switch(inputNumber){
    case inputNumber %3 == 0:
        console.log(`fizz`);
    break;
    case inputNumber %5 == 0:
        console.log(`Buzz`);
        break;
    case inputNumber %3 == 0 && inputNumber %5 == 0:
        console.log(`FizzBuzz`);
    default:
        console.log(`Chinh la so do`);
        break;
}