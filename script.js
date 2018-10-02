//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

//This is the code for Javascript problem #1
function sleep_in(weekday, vacation) {
    return !weekday || vacation;
}


//This is the code for Javascript problem #2
function monkey_trouble (aSmile, bSmile) {
    if (aSmile && bSmile) {
        return true;
    }
    if (!aSmile && !bSmile) {
        return true;
    }
    return false;
}


//This is the code for Javascript problem #3
function string_times (str, n) {
    return str.repeat(n);
}


//This is the code for Javascript problem #4

function front_times (str, n) {
    frontLen = 3;
    if (frontLen > str.length) {
        frontLen = str.length;
    }
    front = str.substring(0, frontLen);
    result = '';
    for (x = 0; x < n; x++) {
        result = result + front;
    }
    return result;
}


//This is the code for Javascript problem #5
function string_bits (str) {
    result = '';
    for (x = 0; x < str.length; x += 2) {
        result = result + str.substring(x, x + 1);
    }
    return result;
}



//This is the code for Javascript problem #6
function caughtSpeeding (speed, isBirthday) {
    if (isBirthday) {
        if (speed <= 65) {
            return 0;
        } else if (speed >= 66 && speed <= 85) {
            return 1;
        } else if (speed >= 86) {
            return 2;
        }
    }

    if (speed <= 60) {
        return 0;
    } else if (speed >= 61 && speed <= 80) {
        return 1;
    } else {
        return 2;
    }
}



//This is the code for Javascript problem #7
function fizz_buzz (n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return 'FizzBuzz';
    } else if (n % 3 == 0) {
        return 'Fizz';
    } else if (n % 5 == 0) {
        return 'Buzz';
    }
    return `${n.toString()}!`;
}



//This is the code for Javascript problem # 8
function teaParty (tea, candy) {
    if (tea >= 5 && candy >= 5) {
        if (tea >= candy * 2 || candy >= tea * 2) {
            return 2;
        }
        return 1;
    }
    return 0;
}


//This is the code for Javascript problem #9
function blackjack (a, b) {
    if (a > 21 && b > 21) {
        return 0;
    }

    const big = Math.max(a, b);
    const small = Math.min(a, b);

    if (big <= 21) {
        return big;
    } else if (small <= 21) {
        return small;
    }
}




//This is the code for Javascript problem #10
function loneSum (a, b, c) {
    sum = 0;
    if (a != b && a != c) {
        sum += a;
    }

    if (b != c && b != a) {
        sum += b;
    }

    if (c != a && c != b) {
        sum += c;
    }

    return sum;
}

