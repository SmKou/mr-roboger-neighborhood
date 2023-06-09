const funcList = ["parseUserNumber", "createNeighbors","generateNeighborList"];

/**
 * Lists the business logic functions to the console
 * Provides reminder of how to use runTests
 */
function listFunctions() {
    funcList.forEach(val => console.log(val));
    console.log('To run the tests on a function, use runTests("function_name").\nDo not forget to specify a function name with either single or double quotes, and case-sensitive as shown.\nIf you would like to see the tests for all functions, enter an empty string.')
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
                input: { str: "" },
                expected: 0,
                result: () => parseUserNumber(this.input.str)
            },
            "2": {
                test: "If the input string is 0, return 0",
                input: { str: "0" },
                expected: 0,
                result: () => parseUserNumber(this.input.str)
            },
            "3": {
                test: "If the input string is a, return 0.",
                input: { str: "a" },
                expected: 0,
                result: () => parseUserNumber(this.input.str)
            },
            "4": {
                test: "If the input string is 2a, return 2.",
                input: { str: "2a" },
                expected: 2,
                result: () => parseUserNumber(this.input.str)
            },
            "5": {
                test: "If the input string is -1, return 0.",
                input: { str: "-1" },
                expected: 0,
                result: () => parseUserNumber(this.input.str)
            },
            "6": {
                test: "If the input string is 400000001, return 400000000.",
                input: { str: "400000001" },
                expected: 400000000,
                result: () => parseUserNumber(this.input.str)
            },
            "7": {
                test: "If the input string is 1, return 1.",
                input: { str: "1" },
                expected: 1,
                result: () => parseUserNumber(this.input.str)
            },
            "8": {
                test: "If the input string is 1a2, return 12.",
                input: { str: "1a2" },
                expected: 12,
                result: () => parseUserNumber(this.input.str)
            },
            "9": {
                test: "If the input string is -1a2, return 0.",
                input: { str: "-1a2" },
                expected: 0,
                result: () => parseUserNumber(this.input.str)
            },
            "10": {
                test: "If the input string is 400a000w001, return 400000000.",
                input: { str: "400a000w001" },
                expected: 400000000,
                result: () => parseUserNumber(this.input.str)
            }
        },
        "createNeighbors": {
            "1": {
                test: "If the number is 0, return an array with one entry, 0 as a string.",
                input: { num: 0 },
                expected: ["0"],
                result: () => createNeighbors(this.input.num)
            },
            "2": {
                test: "If the number is 1, return an array with two entries, 0 Beep!",
                input: { num: 1 },
                expected: ["0", "Beep!"],
                result: () => createNeighbors(this.input.num)
            },
            "3": {
                test: "If the number is 2, return an array with three entries, 0 Beep! Boop!",
                input: { num: 2 },
                expected: ["0", "Beep!", "Boop!"],
                result: () => createNeighbors(this.input.num)
            },
            "4": {
                test: "If the number is 3, return an array with four entries, 0 Beep! Boop! Won't you be my neighbor?",
                input: { num: 3 },
                expected: ["0", "Beep!", "Boop!", "Won't you be my neighbor?"],
                result: () => createNeighbors(this.input.num)
            },
            "5": {
                test: "If the number is 12, return an array with thirteen entries, 0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop!",
                input: { num: 12 },
                expected: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!"],
                result: () => createNeighbors(this.input.num)
            }
        },
        "generateNeighborList": {
            "1": {
                test: "If a list is empty, return an empty string.",
                input: { list: [] },
                expected: "",
                result: () => generateNeighborhoodList(this.input.list)
            },
            "2": {
                test: "If a list has one element, 0, return <span>0</span>",
                input: { list: ["0"] },
                expected: "<span>0</span>",
                result: () => generateNeighborhoodList(this.input.list)
            },
            "3": {
                test: "If a list has two elements, 0 Beep!, return <span>0</span><span>Beep!</span>",
                input: { list: ["0", "Beep!"] },
                expected: "<span>0</span><span>Beep!</span>",
                result: () => generateNeighborhoodList(this.input.list)
            }
        }
    }

    const compareVal = (expected, returned) => {
        if (typeof expected !== typeof returned)
            return false;
        let status = false;
        switch (typeof expected) {
            case 'boolean':
                status = Boolean(expected) === Boolean(returned);
                break;
            case 'object':
                status = (Array.isArray(expected)) ?
                    expected.join('') === returned.join() :
                    Object.keys(expected).join(',') === Object.keys(returned).join(',')
                    && Object.values(expected).join(',') === Object.values(returned).join(',');
                break;
            default:
                status = expected === returned;
                    
        }
        return status;
    }

    const execute = (functionName) => Object.keys(tests[functionName]).forEach((key) => {
        console.log(
            `${functionName} Test ${key}: ${tests[functionName][key].test}\n`,
            (compareVal(
                tests[functionName][key].expected),
                tests[functionName][key].result
                ) ?
                'success' :
                'failure'
        )
    })

    if (!functionName)
        Object.keys(tests).forEach((key) => execute(key))
    else
        execute(functionName)
}