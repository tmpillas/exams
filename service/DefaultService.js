'use strict';


/**
 * Get all blog posts
 *
 * returns List
 **/
exports.postsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "title" : "title",
  "content" : "content"
}, {
  "id" : 0,
  "title" : "title",
  "content" : "content"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new blog post
 *
 * body Post 
 * returns Post
 **/
exports.postsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "title" : "title",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get comments for a blog post
 *
 * postId Long 
 * returns List
 **/
exports.postsPostIdCommentsGET = function(postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "postId" : 6,
  "text" : "text"
}, {
  "id" : 0,
  "postId" : 6,
  "text" : "text"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a comment to a blog post
 *
 * body Comment 
 * postId Long 
 * returns Comment
 **/
exports.postsPostIdCommentsPOST = function(body,postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "postId" : 6,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a blog post
 *
 * postId Long 
 * no response value expected for this operation
 **/
exports.postsPostIdDELETE = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific blog post
 *
 * postId Long 
 * returns Post
 **/
exports.postsPostIdGET = function(postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "title" : "title",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a blog post
 *
 * body Post 
 * postId Long 
 * returns Post
 **/
exports.postsPostIdPUT = function(body,postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "title" : "title",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

