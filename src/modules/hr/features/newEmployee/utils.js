
export const mergeObjectInfo = (employee, ...objectNames) => {
  const newObject = {};

  for (const objectName of objectNames) {
    if (employee.hasOwnProperty(objectName)) {
      const object = employee[objectName];
      if (typeof object === "object" && object !== null) {
        const objectKeys = Object.keys(object);
        for (const key of objectKeys) {
          newObject[key] = object[key];
        }
      }
    }
  }

  return newObject;
};

export const handleErrorResponse = (errorResponse) => {
  const errorMessages = [];

  if (errorResponse && errorResponse.error) {
    const errorObject = errorResponse.error;
    for (const property in errorObject) {
      if (Object.prototype.hasOwnProperty.call(errorObject, property)) {
        const messages = errorObject[property];
        if (Array.isArray(messages)) {
          errorMessages.push(...messages);
        } else {
          errorMessages.push(messages);
        }
      }
    }
  }

  return errorMessages;
};

// const result = {error: {emp_id:["Already exist"],adhar:["Same Number"]}}
// const handleErrorResponseFun = handleErrorResponse(result)
// console.log(handleErrorResponseFun)
// ["Already exist","Same Number"]