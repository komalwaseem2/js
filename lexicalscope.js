var sum = 0;
var arr = [];

calculator(2);

console.log("Table: "+arr);
console.log("Sum: "+sum);

function calculator(num) {
    for (i=1; i<=10; i++){
        arr.push(i*num);
    }

    sumArray(arr);

    function sumArray(array) {
        array.forEach(value=>{sum+=value});
    }
}