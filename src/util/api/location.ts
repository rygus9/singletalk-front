import client from "./client";

export const getBigLocation = () =>
  client
    .get(
      "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"
    )
    .then((data) => data.data.regCodes);

export const getSubLocation = (twoCode: string) =>
  client
    .get(
      `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${twoCode}*000000`
    )
    .then((data) => data.data.regCodes);
