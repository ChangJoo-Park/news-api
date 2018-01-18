const { postController } = require('../controllers')

const getPosts = {
  method: 'GET',
  path: '/api/posts',
  config: {
    handler: postController.getPosts
  }
}

module.exports = function (server) {
  server.route(getPosts)
}
