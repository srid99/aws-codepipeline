#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {AwsCodepipelineStack} from '../lib/aws-codepipeline-stack';

const app = new cdk.App();

new AwsCodepipelineStack(app, 'AwsCodepipelineStack', {
    env: {
        account: '012290904591',
        region: 'eu-west-1',
    }
});

app.synth();
