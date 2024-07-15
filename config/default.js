module.exports = {
  apps: {
    'admin-web': {
      port: 3000,
    },
    'incoming-messages-api': {
      port: 3001,
    },
  },
  mongodb: 'mongodb://mongodb',
  channel: {
    channelCode: '',
    channelId: '',
    channelBotId: '',
    secretKey: '',
  },
  app: {
    clientId: '',
    clientSecret: '',
    widgetCode: ''
  },
};
