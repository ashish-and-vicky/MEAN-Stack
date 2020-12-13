
class Calculator {

    add(n1, n2) {
        return n1 + n2;
    }

    subtract(n1, n2) {
        return n1 - n2;
    }


    // Execution Point
    static main() {
        let obj = new Calculator();
        let output =  obj.add(1, 2);
        console.log(output);
    }
}

Calculator.main();

