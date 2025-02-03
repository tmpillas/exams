// Constructor for ResponsePayload object
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Function to create a ResponsePayload object and return it
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

// Function to write a JSON response
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  // If arg1 is an instance of ResponsePayload, use its payload and code
  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Determine the response code
  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  // Determine the payload
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  // Default to status code 200 if no code is provided
  if(!code) {
    code = 200;
  }
  // Convert payload to JSON string if it's an object
  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }
    // Write the response headers and payload
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
