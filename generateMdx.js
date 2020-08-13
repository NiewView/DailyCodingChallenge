const { lstatSync, readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

console.log("------");
console.log("Generate .mdx files from description and code");

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const testResults = {};
JSON.parse(readFileSync("./testresults.json")).testResults.forEach(result=>{
    result.assertionResults.forEach(testresult =>{
        if(testResults[testresult.ancestorTitles] == null){
            testResults[testresult.ancestorTitles] = {passed: 0, failed:0, pending:0};
        } 
        testResults[testresult.ancestorTitles][testresult.status] += 1 
    })
})


const dirs = getDirectories("./challenges/").filter(path => !path.includes("template"));
dirs.forEach(dirpath=>{
    const challenge_name = dirpath.replace("challenges/", "").replace("challenges\\", "");
    let description = readFileSync(dirpath + "/readme.md", "utf-8");
    let code = readFileSync(dirpath + "/main.ts", "utf-8");
    let tests = readFileSync(dirpath + "/main.spec.ts", "utf-8");

    let out = `---
name: ${description.match(/^# (.*)/m)[1]}
menu: Challenges
route: /challenges/${challenge_name}
---`;
    out += "\n\n" + description;
    out += "\n\n ## Implementation\n\n"

    if(challenge_name in testResults){
        if(testResults[challenge_name].failed === 0){
            out += `![test-success](https://img.shields.io/badge/tests-${testResults[challenge_name].passed}%20passed-brightgreen)`
        } else{
            out += `![test-success](https://img.shields.io/badge/tests-${testResults[challenge_name].passed}%20passed%2C%20${testResults[challenge_name].failed}%20failed-red)`
        }
    }
    out += "\n\n```typescript\n" + code + "\n```\n";
    writeFileSync(dirpath + "/index.mdx", out);
})


console.log("Done");
console.log("------");
