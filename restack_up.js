import { RestackCloud } from "@restackio/restack-sdk-cloud-ts";

const main = async () => {
  const restackCloudClient = new RestackCloud(process.env.RESTACK_SDK_TOKEN);

  const expressApp = {
    name: "expressApp",
    dockerFilePath: "app/Dockerfile",
    dockerBuildContext: "expressApp",
  };



  await restackCloudClient.stack({
    name: "development environment",
    previewEnabled: false,
    applications: [expressApp],
  });

  await restackCloudClient.up();
};

main();