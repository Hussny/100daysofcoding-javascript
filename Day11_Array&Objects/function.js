function sumandmultiply(a,b) {
    return[a+b, a*b]
}

const [sum, multiply, division="no division"] = sumandmultiply(6, 7);

console.log(sum);
console.log(multiply);
console.log(division);