import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';
import { store } from '../store';
import { getAvatarUrl } from '../store/action';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.error(error.response.data.error);
      }

      throw error;
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      const avatarUrl = response.data.avatarUrl;
      if (avatarUrl) {
        store.dispatch(getAvatarUrl(avatarUrl));
      }

      return response;
    },
  );

  return api;
};


