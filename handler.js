'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hola mundo!',
        //input: event,
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.suma = async (event) => {
  console.log("evento", event.body);
  const body = JSON.parse(event.body);
   const num1 = body.numero1;
   const num2 = body.numero2;

   const result = num1 + num2;


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "el resultado es: " +result,
        //input: event,
      },
      null,
      2
    ),
  };
}