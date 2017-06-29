calcPrimes();

function calcPrimes() {
    for (var i = 0; i <= 1e5; i++) {
        if (isPrime(i)) {
            print(i);
        }
    }
}

function print(text) {
    document.write(text + '<br>');
}

function isPrime(num) {
    
    if (num <= 3) {
        return true;
    }
    
    var halfNum = Math.round(num / 2);
    for (var i = 2; i <= halfNum; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}