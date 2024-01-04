function receivesAFunction(cb) {
    cb()
}

const returnsANamedFunction = function () {
    return function addNumbers(num1, num2) {
        return num1 + num2
    }
}

const returnsAnAnonymousFunction = () => {
    return (num1, num2) => num1 + num2
}
