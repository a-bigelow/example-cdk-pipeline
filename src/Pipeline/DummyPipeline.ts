import { Stack, StackProps } from 'aws-cdk-lib';
import { Repository } from 'aws-cdk-lib/aws-codecommit';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';

export class DummyPipeline extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const dummySynth = new ShellStep('DummySynth', {
      commands: ['yarn build --frozen-lockfile'],
      input: CodePipelineSource.codeCommit(new Repository(this, 'DummyRepo', { repositoryName: 'DummyRepo' }), 'main'),
    });

    // @ts-ignore
    const dummyPipeline = new CodePipeline(this, 'DummyPipeline', {
      synth: dummySynth,
    });

    // Uncomment the below line to fix the Suppression error
    // dummyPipeline.buildPipeline();

    NagSuppressions.addResourceSuppressionsByPath(this, '/example-cdk-pipeline/DummyPipeline/Pipeline/ArtifactsBucket/Resource', [
      {
        id: 'AwsSolutions-S1',
        reason: 'Because I said so',
      },
    ]);

  }
}