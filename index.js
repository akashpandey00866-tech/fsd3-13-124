function sayHello(name){
    console.log('welcom to ${name}');
}
function sum (a,b){
    return a+b;
}
sayHello('akash pandey');
console.log(sum(2,5));
function sum(a , b){
   

    return sum;
}

greet("hello")
// greet2("Hello");
// greet3("hello");

// write function which takes a number between 0 to 9 and written in words

const numberToWord = (a) => {
    switch (a) {
        case 0:
            return 'zero'
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
    
        default:
            console.log('please entet number between 0 to nine');
            
            break;
    }
}


numberToWord(4);


function greet(name){
    console.log(name);
}

greet("rekha");

const greet2 = function(name){
    console.log(name);
    console.log(this);
    
}

greet2("rekha");

const greet3 = (name) =>
    {
        console.log(name);
    } 
    
    
greet3('rekha3');

// create another functino that takes a number and show in words with the help of two words function

const toWords = (rollNumber) =>{
    const numberArr = String(rollNumber).split('');
    console.log(numberArr);
    
    let inword = '';
    // for(let i = 0; i < numberArr.length; i++){
    //     inword += `${numberToWord(Number(numberArr[i]))} `;
    // }
    numberArr.forEach((num) => {
        inword += `${numberToWord(Number(num))} `;
    });

    return inword.toUpperCase();
        
     }

console.log(toWords(2503201000125));
