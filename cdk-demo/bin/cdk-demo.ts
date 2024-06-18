import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { FargateDemoStack } from "../lib/fargate";
import { CloudfrontDemoStack } from "../lib/cloudfront";

const app = new cdk.App();

// Cloudfront stack
// new CloudfrontDemoStack(app, "CloudfrontDemoStack", {
//   stage: "prod",
//   env: { account: "869228520926", region: "us-east-1" },
// });

// Fargate stack
new FargateDemoStack(app, "FargateDemoStack", {
  env: { account: "12345678", region: "us-east-1" },
});