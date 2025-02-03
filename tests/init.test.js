const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');



test.before(async (t) => {
    t.context.server = http.createServer(app);
   // const server = t.context.server.listen();
    //const { port } = server.address();
    t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${8080}` });
    console.log('Server started');
});

// test.before(async (t) => {
// 	t.context.server = http.createServer(app);
//   const server = t.context.server.listen();
//   const { port } = server.address();
//     t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
//   });

// After the tests
test.after.always((t) => {
    t.context.server.close();
    console.log('Server closed');
});

// Test case for getting all posts
test("GET /posts - Should return all posts", async (t) => {
    const {headers, statusCode} = await t.context.got("posts");
    t.is(statusCode, 200, "Response status should be 200");
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
    //t.truthy(body.title, "Posts should have a title");
});