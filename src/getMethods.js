const fileName = process.argv[2];
export const testObject = require("./tests/" + fileName);
console.log("ok")
export function getTest() {
    let methodCollection = [];
    let objectMethod = testObject[fileName];
    let properties = Object.getOwnPropertyNames(objectMethod);

    properties.forEach(methodName => {
        let method = objectMethod[methodName];
        if (method && method.constructor === Function) {
            methodCollection.push(methodName)
        }
    });
    console.log(objectMethod)
    console.log(methodCollection)
    return {objectMethod, methodCollection};
}