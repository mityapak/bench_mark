


export async function getMethodsArray (objectTest){
    let methodsArray = [];
    let properties = Object.getOwnPropertyNames(objectTest)
    properties.forEach (methodName => {
        let method = objectTest[methodName];
        if (method && method.constructor === Function) {
            methodsArray.push(methodName)
        }
    });

    return methodsArray;
}
