'use strict';

// Import utility functions for writing JSON responses
var utils = require('../utils/writer.js');
// Import service functions for handling requests
var Default = require('../service/DefaultService');

// Handler for GET request to retrieve all posts
module.exports.postsGET = function postsGET (_, res, __) {
  Default.postsGET()
    .then(function (response) {
      // Respond with the retrieved posts data
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with error message
      utils.writeJson(res, response);
    });
};

// Handler for POST request to create a new post
module.exports.postsPOST = function postsPOST (_, res, __, body) {
  Default.postsPOST(body)
    .then(function (response) {
      // Respond with the result of the create operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
        // Handle errors by responding with error message  
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve all comments from a post by postID
module.exports.postsPostIdCommentsGET = function postsPostIdCommentsGET (_, res, __, postId) {
  Default.postsPostIdCommentsGET(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdCommentsPOST = function postsPostIdCommentsPOST (_, res, __, body, postId) {
  Default.postsPostIdCommentsPOST(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdDELETE = function postsPostIdDELETE (_, res, __, postId) {
  Default.postsPostIdDELETE(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdGET = function postsPostIdGET (_, res, __, postId) {
  Default.postsPostIdGET(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdPUT = function postsPostIdPUT (_, res, __, body, postId) {
  Default.postsPostIdPUT(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
