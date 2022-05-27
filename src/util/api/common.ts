import { AxiosError } from "axios";

export interface CUDReturn {
  result: boolean;
}

export const wrappingAxios = async (axiosFunc: Promise<any>) => {
  try {
    const result = await axiosFunc;
    return result.data;
  } catch (err) {
    const error = err as AxiosError;
    throw error;
  }
};
