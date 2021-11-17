'use strict'

// module.exports = async (event, context) => {
//   const result = {
//     'body': JSON.stringify(event.body),
//     'content-type': event.headers["content-type"]
//   }

//   return context
//     .status(200)
//     .succeed(result)
// }

module.exports = function(subject) {
  console.log('Hello ' + subject);
};


