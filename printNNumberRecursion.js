function printNNumberRecursion(n) {

    if(n == 0) {
        return;
    }
    console.log(n);
    printNNumberRecursion(n-1);
}

printNNumberRecursion(5);
