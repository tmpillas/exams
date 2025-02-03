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
});

// Test case for getting a specific blog post
test("GET /posts/{postId} - Should return a specific post", async (t) => {
    const postId = 0;
    const {headers, statusCode, body} = await t.context.got(`posts/${postId}`);
    t.is(statusCode, 200, "Response status should be 200");
    t.truthy(body, "Response body should not be empty");
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
    t.truthy(body.title, "Posts should have a title");
});

// Test case for getting comments from a blog 
test("GET /posts/{postId}/comments - Should return post comments", async (t) => {
    const postId = 0;
    const {headers, statusCode, body} = await t.context.got(`posts/${postId}/comments`);
    t.is(statusCode, 200, "Response status should be 200");
    t.truthy(body, "Response body should not be empty");
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
});

test("DELETE /posts/{postId} - Should delete a post", async (t) => {
    const postId = 0;
    const {statusCode} = await t.context.got.delete(`posts/${postId}`);
    t.is(statusCode, 200, "Response status should be 200");
});