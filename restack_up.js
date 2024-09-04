import { RestackCloud } from "@restackio/restack-sdk-cloud-ts";

const main = async () => {
  const restackCloudClient = new RestackCloud(process.env.RESTACK_SDK_TOKEN);

  const supersetApp = {
    name: "supersetApp",
    dockerFilePath: "superset/Dockerfile",
    dockerBuildContext: "superset",
  };



  await restackCloudClient.stack({
    name: "development environment",
    previewEnabled: false,
    applications: [supersetApp],
  });

  await restackCloudClient.up();
};

main();