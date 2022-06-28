import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DummyFunction } from '../dummy-function';

export class DummyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    new DummyFunction(this, 'DummyFunction');

  }
}