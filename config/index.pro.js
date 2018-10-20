var path = require('path');

module.exports = {
  // Node.js app
  port: process.env.PORT || 8080,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`
  },

  name: '一起学JS',
  description: '',
  keywords: '',

  // 添加到 html head 中的信息
  headers: ['<meta name="your name" content="your@mail.com" />'],

  logo: '/public/images/logo_128.svg',

  sessionSecret: 'community-test-secret', // 务必修改
  authCookieName: 'community-test-name', // 务必修改
  jwtSecret: 'jwt-secret', // 务必修改

  fileLimit: '2MB',

  apiPrefix: {
    page: '',
    data: '/api/v1',
    graphql: '/graphql'
  },

  mdType: 'chinese-article',
  postListCount: 50,
  replyListCount: 50,

  signinValid: true,
  signupValid: true,

  admin: {
    loginname: 'admin',
    password: '123456',
    email: 'test@mail.com',
    avatar: 'https://avatar.com/image'
  },

  email: {
    host: 'smtp.mail.com',
    port: 465,
    auth: {
      user: '',
      pass: ''
    }
  },

  mongodb: {
    url: 'mongodb://127.0.0.1:27017/community'
  },

  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: ''
  },

  upload: {
    path: path.join(__dirname, '../upload/'),
    url: '/static/'
  },

  qn: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    origin: '',
    uploadURL: ''
  },

  github: {
    signinValid: true,
    clientID: 'cf8770d617d9298696c1',
    clientSecret: 'db99f0e1491b0c1a27b59ada475521e18b469a12',
    callbackURL: 'http://zhuanyongxigua.cn:8080/api/auth/github/callback',
    redirectURL: '/views/dist/index.html#/004-my'
  },

  googleAnalytics: `your google analytics code`,
};
