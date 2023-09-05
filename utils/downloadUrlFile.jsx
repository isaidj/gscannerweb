import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAQUYEXQYY6GKOAMNG",
    secretAccessKey: "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",
  },
});

const input = {
  Bucket: "gscanner",
  Key: "prueba.png",
};
//get object
export const getObject = async () => {
  try {
    const command = new GetObjectCommand(input);
    const response = await client.send(command);
    const buffer = await new Response(response.Body).arrayBuffer();
    const blob = new Blob([buffer]);
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default getObject;
