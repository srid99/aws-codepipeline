#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {AwsCodepipelineStack} from '../lib/aws-codepipeline-stack';

const app = new cdk.App();

new AwsCodepipelineStack(app, 'AwsCodepipelineStack', {
    env: {
        account: process.env.AWS_ACCOUNT,
        region: process.env.AWS_REGION,
    }
});

app.synth();
