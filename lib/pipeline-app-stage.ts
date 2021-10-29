import * as cdk from '@aws-cdk/core';
import {PipelineLambdaStack} from './pipeline-lambda-stack';

export class PipelineAppStage extends cdk.Stage {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        new PipelineLambdaStack(this, 'PipelineLambdaStack');
    }
}
