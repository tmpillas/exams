'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.postsGET = function postsGET (_, res, __) {
  Default.postsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPOST = function postsPOST (_, res, __, body) {
  Default.postsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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
