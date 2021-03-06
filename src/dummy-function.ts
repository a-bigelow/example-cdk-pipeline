// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for DummyFunction
 */
export interface DummyFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/dummy.
 */
export class DummyFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: DummyFunctionProps) {
    super(scope, id, {
      description: 'src/dummy.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../assets/dummy.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}