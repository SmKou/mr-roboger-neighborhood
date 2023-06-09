const funcList = ["parseUserNumber", "createNeighbors","generateNeighborList"];

/**
 * Lists the business logic functions to the console
 * Provides reminder of how to use runTests
 */
function listFunctions() {
    funcList.forEach(val => console.log(val));
    console.log('To run the tests on a function, use runTests("function_name").')
    console.log('Do not forget to specify a function name with either single or double quotes, and case-sensitive as shown.')
    console.log('If you would like to see the tests for all functions, enter an empty string.')
}

/**
 * Compares the values of expected and result
 * If booleans, convert with Boolean when comparing
 * If arrays, compare string representations
 * @param {*} expected 
 * @param {*} result 
 * @returns whether expected and result are equal
 */
function compareValues(expected, result) {
    return;
}

/**
 * Prints test details and outcome to console
 * @param {String} funcName 
 * @param {String} n 
 * @param {String} description 
 * @param {Boolean} outcome 
 */
function displayResult(funcName, n, description, outcome) {
    console.log(`${funcName} Test ${n}: ${description}\n${outcome? 'SUCCESS': 'FAILED'}`)
}

/**
 * Runs a series of tests
 * Either all test cases of a function or all test cases of all functions
 * Displays results of tests in console
 * - Format: 'Test n: [description]
 *   success|failed'
 * @param {String} functionName 
 */
function runTests(functionName = "") {
    const tests = {
        "parseUserNumber": {
            "1": {
                test: "If the input string is empty, return 0.",
                input: {
                    str: ""
                },
                expected: 0,
                result: () => parseUserNumber(this.input.str)
            }
        },
        "createNeighbors": {},
        "generateNeighborList": {}
    }

    const getResults = (test) => {
        Object.keys(test).forEach(testCase => displayResult(functionName, testCase, test[testCase].test, compareValues(test[testCase].expected, test[testCase].result)))
    }

    if (funcName.length === 0)
        Object.keys(tests).forEach(func => getResults(tests[func]))
    else
        getResults(tests[functionName])
}