import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DevStack } from '../lib/dev-stack';

const prefix = '/dev/ssm/';

const paramName = [
    { 
        'stringValue': '1',
        'description': 'This is parameter 1' 
    }
];

paramName.forEach((param) => {
    test(Object.values(param)[1], () => {
        const app = new cdk.App();
        const stack = new DevStack(app, 'ssmTestStack');
    
        const template = Template.fromStack(stack);
        template.hasResourceProperties('AWS::SSM::Parameter', {
            Name: `${prefix}${Object.keys(param)[0]}`,
            Value: Object.values(param)[0]
        });
    });
});
