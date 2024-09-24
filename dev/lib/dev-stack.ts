import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';

const prefix = '/dev/ssm/';

const paramName = [
  { 
    'stringValue': '1',
    'description': 'This is parameter 1' 
  }
];

export class DevStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    paramName.forEach((param) => {
      new ssm.StringParameter(this, Object.keys(param)[0], {
        parameterName: `${prefix}${Object.keys(param)[0]}`,
        stringValue: Object.values(param)[0],
        description: Object.values(param)[1],
      });
    });
  }
}
