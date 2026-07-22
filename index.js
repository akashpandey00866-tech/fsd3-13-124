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
            console.log('zero');
            
            break;
        case 1:
            console.log('one');
            
            break;
        case 2:
            console.log('two');
            
            break;
        case 3:
            console.log('three');
            
            break;
        case 4:
            console.log('four');
            
            break;
        case 5:
            console.log('five');
            
            break;
        case 6:
            console.log('six');
            
            break;
        case 7:
            console.log('seven');
            
            break;
        case 8:
            console.log('eight');
            
            break;
        case 9:
            console.log('nine');
            
            break;
    
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