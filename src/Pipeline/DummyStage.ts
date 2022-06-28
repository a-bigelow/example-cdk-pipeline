import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DummyStack } from '../Stack/DummyStack';

export class DummyStage extends Stage {
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);

    new DummyStack(this, 'DummyStack', {});

  }
}