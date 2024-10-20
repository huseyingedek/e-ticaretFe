import { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface IPostApiState {
  loading: boolean;
  error: string | null;
  data: object | null;
  status?: number;
  message?: string;
}

interface IMutateProps {
  apiPath?: string;
  method?: "PUT" | "DELETE" | "POST" | "GET";
  baseURL?: string;
  withCredentials?: boolean;
}

type TMutateReturn = [
  (variables?: object, params?: object) => Promise<IPostApiState>,
  object | null | any,
  boolean,
  string | null
];

const useMutateApi = ({
  apiPath,
  method = "GET", // Default method is GET
  baseURL,
}: IMutateProps): TMutateReturn => {
  const [responseData, setResponseData] = useState<IPostApiState>({
    loading: false,
    error: null,
    data: null,
    status: 0,
  });

  const fetchApi = async (
    variables?: object,
    params?: object
  ): Promise<IPostApiState> => {
    setResponseData({ ...responseData, loading: true });
    
    const axiosConfig = {
      baseURL: baseURL || process.env.NEXT_PUBLIC_API_URL,
      url: apiPath,
      method,
      params,
      data: variables,
      withCredentials: true, // If needed, can be set here
    };

    try {
      const response: AxiosResponse = await axios(axiosConfig);
      const resData: IPostApiState = {
        loading: false,
        error: null,
        data: response.data,
        status: response.status,
      };
      setResponseData(resData);
      return resData;
    } catch (error) {
      const errResponse = (error as any).response || { data: { message: "Bir hata oluştu." } };
      const resData: IPostApiState = {
        loading: false,
        error: errResponse.data.message,
        data: null,
        status: errResponse.status,
      };
      setResponseData(resData);
      return resData;
    }
  };

  return [fetchApi, responseData.data, responseData.loading, responseData.error];
};

export default useMutateApi;
