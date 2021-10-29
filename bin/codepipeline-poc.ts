#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {ExamplePipelineStack} from '../lib/example-pipeline-stack';

const app = new cdk.App();

new ExamplePipelineStack(app, 'ExamplePipelineStack', {
    env: {
        account: process.env.AWS_ACCOUNT,
        region: process.env.AWS_REGION
    }
});

app.synth();
