'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)

const getCredentials = () => {
  //Mongo connection
  const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD
  } = process.env;

  const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
 
  return {
    MONGO_URL,
    MONGO_USER,
    MONGO_PASSWORD
  };
};

const connect = async () => {
  const mongoCredentials = helper.getCredentials();
  console.info(`Connecting to ${mongoCredentials.MONGO_URL}`);

  try {
    await mongoose.connect(mongoCredentials.MONGO_URL, {
      user: mongoCredentials.MONGO_USER,
      pass: mongoCredentials.MONGO_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.info('Connected successfully to mongodb');
    
    const connection = mongoose.connection;
    /* istanbul ignore next */
    connection.on('connecting', () => console.info('Connecting to mongodb'));
    /* istanbul ignore next */
    connection.on('disconnecting', () => console.info('Disconnecting from mongodb'));
    /* istanbul ignore next */
    connection.on('disconnected', () => console.info('Disconnected from mongodb'));
    /* istanbul ignore next */
    connection.on('close', () => console.info('Mongodb connection closed'));
    /* istanbul ignore next */
    connection.on('error', err => console.info('Error Connecting to mongodb', err.message));
    /* istanbul ignore next */
    connection.on('reconnected', () => console.info('Mongodb reconnected successfully'));

    process.emit('ready')
    return true;
  } catch (err) {
    console.info('Mongodb connection error', JSON.stringify(err));
    return false;
  }
};

/* istanbul ignore next */
const isConnected = () => {
  return mongoose.connection.readyState === 1 ? true : false;
};


const destroy = () => {
  try {
    return mongoose.connection.close();
  } catch (e) {
    console.error(e);
  }
};

const helper = {
  getCredentials,
  connect,
  isConnected,
  destroy
};

module.exports = helper;