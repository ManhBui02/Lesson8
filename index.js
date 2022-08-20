// May Tinh 
const operator = prompt('Enter operator ( either +, -, * or / ):');
const num1 =parseInt(prompt('Enter Number 1 '));
const num2 = parseInt(prompt('Enter Number 2'));
const num3 = num1 + num2;
if (operator == "*"){
    alert(num1 * num2)
} else if(operator == "+"){
    alert(num3)
} else if(operator == "-"){
    alert(num1 - num2)
} else if(operator == "/"){
    alert(num1 / num2)
}

// Tim so nguyen to 

function isPrime(number) {
    if (isNaN(number)) return false;

    if (number < 2) return false;
    if (number ===2) return true; 

    for (i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }

    return true;
    
}




