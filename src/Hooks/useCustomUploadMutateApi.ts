import { useState, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

type UploadApiResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

type UploadApiFunction<T> = (data: FormData) => Promise<void>;

export const useCustomUploadMutateApi = <T>(url: string): [UploadApiFunction<T>, UploadApiResponse<T>] => {
  const [response, setResponse] = useState<UploadApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const uploadApi = useCallback(async (data: FormData) => {
    setResponse({ data: null, error: null, loading: true });
    try {
      const result: AxiosResponse<T> = await axios.post(url, data);
      setResponse({ data: result.data, error: null, loading: false });
    } catch (error) {
      setResponse({ data: null, error: (error as Error).message, loading: false });
    }
  }, [url]);

  return [uploadApi, response];
};