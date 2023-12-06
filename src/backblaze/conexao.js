const { S3 } = require('@aws-sdk/client-s3')
const aws = require('aws-sdk');
require("dotenv").config();

const s3 = new S3({
  region: process.env.AWS_REGION,
  endpoint: new aws.Endpoint(process.env.ENDPOINT_S3),
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
})


module.exports = s3
