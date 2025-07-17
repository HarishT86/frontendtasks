let i = 1;
for (i; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("The number which " + i + " FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log("The number which " + i + " FIZZ");
    }
    else if (i % 5 == 0) {
        console.log("The number which " + i + " BUZZ");
    }

    else {
        console.log(i);
    }
}