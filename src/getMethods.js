const fileName = process.argv[2];
export const testObject = require("./tests/" + fileName);
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

    return {objectMethod, methodCollection};
}