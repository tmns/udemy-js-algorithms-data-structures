// given a base and exponent, return the power of the base to the exponent

function power(base, exp){
    if (exp === 0) {
        return 1;
    } else {
        return base * power(base, exp - 1);
    }
}