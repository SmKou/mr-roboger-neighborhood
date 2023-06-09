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
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "2": {
                test: "If the input string is 0, return 0",
                input: { str: "0" },
                expected: 0,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "3": {
                test: "If the input string is a, return 0.",
                input: { str: "a" },
                expected: 0,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "4": {
                test: "If the input string is 2a, return 2.",
                input: { str: "2a" },
                expected: 2,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "5": {
                test: "If the input string is -1, return 0.",
                input: { str: "-1" },
                expected: 0,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "6": {
                test: "If the input string is 400000001, return 400000000.",
                input: { str: "400000001" },
                expected: 400000000,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "7": {
                test: "If the input string is 1, return 1.",
                input: { str: "1" },
                expected: 1,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "8": {
                test: "If the input string is 1a2, return 12.",
                input: { str: "1a2" },
                expected: 12,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "9": {
                test: "If the input string is -1a2, return 0.",
                input: { str: "-1a2" },
                expected: 0,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "10": {
                test: "If the input string is 400a000w001, return 400000000.",
                input: { str: "400a000w001" },
                expected: 400000000,
                result: {
                    parent: null,
                    exec: function () {
                        return parseUserNumber(this.parent.input.str)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            }
        },
        "createNeighbors": {
            "1": {
                test: "If the number is 0, return an array with one entry, 0 as a string.",
                input: { num: 0 },
                expected: ["0"],
                result: {
                    parent: null,
                    exec: function () {
                        return createNeighbors(this.parent.input.num)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "2": {
                test: "If the number is 1, return an array with two entries, 0 Beep!",
                input: { num: 1 },
                expected: ["0", "Beep!"],
                result: {
                    parent: null,
                    exec: function () {
                        return createNeighbors(this.parent.input.num)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "3": {
                test: "If the number is 2, return an array with three entries, 0 Beep! Boop!",
                input: { num: 2 },
                expected: ["0", "Beep!", "Boop!"],
                result: {
                    parent: null,
                    exec: function () {
                        return createNeighbors(this.parent.input.num)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "4": {
                test: "If the number is 3, return an array with four entries, 0 Beep! Boop! Won't you be my neighbor?",
                input: { num: 3 },
                expected: ["0", "Beep!", "Boop!", "Won't you be my neighbor?"],
                result: {
                    parent: null,
                    exec: function () {
                        return createNeighbors(this.parent.input.num)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "5": {
                test: "If the number is 12, return an array with thirteen entries, 0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop!",
                input: { num: 12 },
                expected: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!"],
                result: {
                    parent: null,
                    exec: function () {
                        return createNeighbors(this.parent.input.num)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            }
        },
        "generateNeighborhoodList": {
            "1": {
                test: "If a list is empty, return an empty string.",
                input: { list: [] },
                expected: "",
                result: {
                    parent: null,
                    exec: function () {
                        return generateNeighborhoodList(this.parent.input.list)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "2": {
                test: "If a list has one element, 0, return <span>0</span>",
                input: { list: ["0"] },
                expected: "<span>0</span>",
                result: {
                    parent: null,
                    exec: function () {
                        return generateNeighborhoodList(this.parent.input.list)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            },
            "3": {
                test: "If a list has two elements, 0 Beep!, return <span>0</span><span>Beep!</span>",
                input: { list: ["0", "Beep!"] },
                expected: "<span>0</span><span>Beep!</span>",
                result: {
                    parent: null,
                    exec: function () {
                        return generateNeighborhoodList(this.parent.input.list)
                    }
                },
                init: function() {
                    this.result.parent = this;
                    delete this.init;
                    return this;
                }
            }
        }
    }

    Object.keys(tests).forEach(func => {
        Object.keys(tests[func]).forEach(testCase =>
            tests[func][testCase].init()
        )
    })

    const compareVal = (expected, returned) => {
        if (typeof expected !== typeof returned
            || Boolean(Array.isArray(expected)) !== Boolean(Array.isArray(returned)))
            return false;
        
        if (typeof expected === 'boolean')
            return Boolean(expected) === Boolean(returned);
        else if (typeof expected === 'object')
            return (Array.isArray(expected)) ?
                expected.join(',')
                === returned.join(',') :
                Object.keys(expected).join(',')
                === Object.keys(returned).join(',')
                && Object.values(expected).join(',')
                === Object.values(returned).join(',')
        else
            return expected === returned;
    }

    const execute = (functionName) => Object.keys(tests[functionName]).forEach((key) => {
        console.log("expected", tests[functionName][key].expected);
        console.log("result", tests[functionName][key].result.exec());
        console.log(
            `${functionName} Test ${key}: ${tests[functionName][key].test}\n`,
            (compareVal(
                tests[functionName][key].expected),
                tests[functionName][key].result.exec()
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