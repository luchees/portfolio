import { SynthUtils } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { S3DeploymentStack } from "../lib/s3-deployment-stack";

test("S3Deployment Stack", () => {
  const app = new cdk.App();
  const stack = new S3DeploymentStack(app, "MyTestStack", {
    folder: "test",
    website: "tests",
  });
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
