'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.postsGET = function postsGET (req, res, next) {
  Default.postsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPOST = function postsPOST (req, res, next, body) {
  Default.postsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdCommentsGET = function postsPostIdCommentsGET (req, res, next, postId) {
  Default.postsPostIdCommentsGET(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdCommentsPOST = function postsPostIdCommentsPOST (req, res, next, body, postId) {
  Default.postsPostIdCommentsPOST(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdDELETE = function postsPostIdDELETE (req, res, next, postId) {
  Default.postsPostIdDELETE(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdGET = function postsPostIdGET (req, res, next, postId) {
  Default.postsPostIdGET(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPostIdPUT = function postsPostIdPUT (req, res, next, body, postId) {
  Default.postsPostIdPUT(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
