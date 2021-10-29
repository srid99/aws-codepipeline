import * as cdk from '@aws-cdk/core';
import {SecretValue} from '@aws-cdk/core';
import {CodePipeline, CodePipelineSource, ShellStep} from '@aws-cdk/pipelines';
import {PipelineAppStage} from "./pipeline-app-stage";

export class ExamplePipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'ExamplePipeline', {
            pipelineName: 'ExamplePipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('srid99/aws-codepipeline', 'master', {
                    authentication: SecretValue.secretsManager("")
                }),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });

        pipeline.addStage(new PipelineAppStage(this, "dummy-stage", {
            env: props?.env
        }));
    }
}
