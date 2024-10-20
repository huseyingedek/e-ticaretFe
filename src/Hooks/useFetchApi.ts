import { useState } from "react";
import axios, { AxiosResponse } from "axios";

type FetchReturn<T> = [(apiPathFirst?: string) => Promise<void>, T | null, boolean];

interface FetchApiState<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

const useFetchApi = <T>(apiPath?: string): FetchReturn<T> => {
  const [responseData, setResponseData] = useState<FetchApiState<T>>({
    loading: false,
    error: null,
    data: null,
  });

  const fetchApi = async (apiPathFirst?: string) => {
    setResponseData({ ...responseData, loading: true });
    const requestOptions = {
      url: `${process.env.NEXT_PUBLIC_API_URL}${apiPathFirst || apiPath}`,
      method: "GET",
    };

    try {
      const response: AxiosResponse<T> = await axios(requestOptions);
      setResponseData({ data: response.data, error: null, loading: false });
    } catch (error) {
      setResponseData({ data: null, error: (error as Error).message, loading: false });
    }
  };

  return [fetchApi, responseData.data, responseData.loading];
};

export default useFetchApi;