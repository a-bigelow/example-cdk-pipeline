const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.29.0',
  defaultReleaseBranch: 'main',
  name: 'example-cdk-pipeline',
  deps: ['cdk-nag'],
  gitignore: ['.idea'],
});
project.synth();