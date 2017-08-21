
export async function getTestObject (fileName){
   let objectMethod = require ('./tests/' + fileName);
   if (objectMethod.default){
      return objectMethod.default;
   }

   return objectMethod;
}