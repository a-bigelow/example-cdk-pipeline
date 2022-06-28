import { App, Aspects } from 'aws-cdk-lib';
import { AwsSolutionsChecks } from 'cdk-nag';
import { DummyPipeline } from './Pipeline/DummyPipeline';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new DummyPipeline(app, 'example-cdk-pipeline', { env: devEnv });

Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
app.synth();