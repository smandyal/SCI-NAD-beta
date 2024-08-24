import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

if (awsconfig) {
  Amplify.configure(awsconfig);
} else {
  console.error('aws-exports.js is not properly configured.');
}
