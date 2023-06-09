function listFunctions() {
    console.log(
        `parseUserNumber or pun\ncreateNeighbors or cn\ngenerateNeighborhood or gn\n"" or '' for all tests\n\nTo run tests, use runTests('function_name|abbr', true|false)\nTrue will run tests, false will describe tests.`
    )
}

function runTests(funcName, testsList = true) {
    if (funcName === 'parseUserNumber' || funcName === 'pun')
        test_parseUserNumber(testsList);
    else if (funcName === 'createNeighbors' || funcName === 'cn')
        test_createNeightbors(testsList);
    else if (funcName === 'generateNeighborhood' || funcName === 'gn')
        test_generateNeighborhood(testsList);
    else {
        test_parseUserNumber(testsList);
        test_createNeightbors(testsList);
        test_generateNeighborhood(testsList);
    }
}

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
            }
        },
        "9": {
            test: "If the input string is -1a2, return 0.",
            input: { str: "-1a2" },
            expected: 12,
            result: {
                parent: null,
                exec: function () {
                    return parseUserNumber(this.parent.input.str)
                }
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
            }
        }
    },
    "generateNeighborhood": {
        "1": {
            test: "If a list is empty, return an empty string.",
            input: { list: [] },
            expected: "",
            result: {
                parent: null,
                exec: function () {
                    return generateNeighborhoodList(this.parent.input.list)
                }
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
            }
        }
    }
}

function runFuncTest(func) {
    Object.keys(tests[func]).forEach(testCase => {
        const test = tests[func][testCase];
        test.result.parent = test;
    })

    Object.keys(tests[func]).forEach(testCase =>
        console.log(`${func} Test ${testCase}`, '\nexpected: ' + tests[func][testCase].expected, '\nresult: ' + tests[func][testCase].result.exec())
    )
}

function descrFuncTest(func) {
    console.log(`Describe: ${func}`);
    Object.keys(tests[func]).forEach(testCase => {
        const testObj = tests[func][testCase];
        console.log('Test' + testCase, testObj.test);
        const ipt = Object.keys(testObj.input).reduce((acc, val) => {
            const iptVal = testObj.input[val];
            if (iptVal
                && typeof iptVal !== 'boolean')
                acc += `\n\tconst ${val} = ${iptVal};`;
            else
                switch (typeof iptVal) {
                    case 'boolean':
                        if (iptVal)
                            acc += `\n\tconst ${val} = true;`
                        else
                            acc += `\n\tconst ${val} = false;`
                        break;
                    case 'string':
                        acc += `\n\tconst ${val} = "";`;
                        break;
                    case 'number':
                        acc += `\n\tconst ${val} = 0;`
                }
                
        }, "");
        console.log('Code: ', `${ipt}\n\tparseUserNumber(str)`);
        console.log('Expected output: ', testObj.expected)
    })
}

function test_parseUserNumber(testsList) {    
    if (testsList)
        descrFuncTest('parseUserNumber');
    else
        runFuncTest('parseUserNumber');
}

function test_createNeightbors(testsList) {
    if (testsList)
        descrFuncTest('createNeighbors');
    else
        runFuncTest('createNeighbors');
}

function test_generateNeighborhood(testsList) {
    if (testsList)
        descrFuncTest('generateNeighborhood');
    else
        runFuncTest('generateNeighborhood');
}