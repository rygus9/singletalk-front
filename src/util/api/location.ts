import { LocInfo } from "./../../components/mocular/location/LocationInput";
import client from "./client";

export const getBigLocation = () =>
  client
    .get(
      "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"
    )
    .then((data) => data.data.regcodes);

export const getSubLocation = (twoCode: string) =>
  client
    .get(
      `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${twoCode}*000000`
    )
    .then((data) =>
      data.data.regcodes
        .filter((elem: any, index: number) => index !== 0)
        .map((elem: LocInfo) => {
          elem.name = elem.name.split(" ")[1];
          return elem;
        })
    );
