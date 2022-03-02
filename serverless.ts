import { AWS } from '@serverless/typescript';

import hoursReminder from './src/functions/hoursReminder';

const serverlessConfiguration: AWS = {
  service: 'hours-reminder',
  configValidationMode: 'error',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      clean: true,
    },
    installLayers: true,
    exportLayers: true
  },
  variablesResolutionMode: "20210326",
  plugins: [
    'serverless-webpack',
    'serverless-offline',
    'serverless-prune-plugin',
    'serverless-webpack-layers'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    memorySize: 128,
    timeout: 900,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      // ENV agnostic variables.
      SLS_SERVICE: '${self:service}', 
      SLS_STAGE: '${opt:stage, "dev"}',
      SLS_REGION: "us-east-1",
      NODE_ENV: '${opt:stage, "dev"}',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      AWS_SECRET_ACCESS_KEY_MYAPP: "",
      AWS_ACCESS_KEY_ID_MYAPP: "",
      AWS_ACCOUNT_ID: "",
    },
    lambdaHashingVersion: '20201221',
  },
  resources: {
    Resources: {}
  },
  // import the function via paths
  functions: {
    hoursReminder,
  },
};

module.exports = serverlessConfiguration;