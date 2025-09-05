function printNNumberRecursion(n) {
    if (n < 1) {
        return;
    }
    printNNumberRecursion(n - 1);
    
    console.log(n);
}

printNNumberRecursion(5);
