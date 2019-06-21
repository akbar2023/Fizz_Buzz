
function fizzBuzz(){
    let t1 = Date.now();
    for(var i = 0; i <= 100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz " + i);
        }else if(i%3 == 0){
            console.log('Fizz ' + i);
        }else if(i%5 == 0){
            console.log('Buzz ' + i);
        }else{
            console.log(i);
        }
        
    }
    let t2 = Date.now();
    console.log(t2 - t1 + 'secs');
}

fizzBuzz();

// V2

function fizzbuzz2(n){
    if(n > 1)
        fizzbuzz2(n - 1);
        var s = n % 3 == 0 ? 'Fizz' : '';
        s += n % 5 == 0 ? 'Buzz' : '';
        console.log(s === '' ? n : s);
}
// let t1 = Date.now();
// fizzbuzz2(100);
// let t2 = Date.now();
// console.log(t2 - t1 + 'secs');

