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

// Test case for deleting a post by postId
test("DELETE /posts/{postId} - Should delete a post", async (t) => {
    const postId = 0;
    const {statusCode} = await t.context.got.delete(`posts/${postId}`);
    t.is(statusCode, 200, "Response status should be 200");
});

//Test case for editing a post by postId
test("PUT /posts/{postId} - Should edit a post", async (t) => {
    const postId = 1;
    const {body, statusCode} = await t.context.got.put(`posts/${postId}`, {json: {postId:1}});
    t.is(statusCode, 200, "Response status should be 200");
    t.truthy(body, "Response body should not be empty");
  });

// dummy data
  const PostData = {
    id: 1,
    title: "title",
    "content": "content"
}
  //Test case for creating a post  
  test("POST /posts", async (t) => {
    const{headers, statusCode, body} = await t.context.got.post(`posts`, {json: PostData, responseType: 'json'});
    t.is(statusCode, 200, "Response status should be 200");
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
    t.is(body.title, PostData.title, "Title should match");
  });