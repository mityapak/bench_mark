import arrayScan from "./tests/arrayScan";
import createObject from "./tests/createObject";
import sortMethods from "./tests/sortMethods";
export async function getTestObject (objectName){
    switch (objectName){
        case "arrayScan":
            return arrayScan;
        case "createObject":
            return createObject;
        case "sortMethods":
            return sortMethods;
    }
}