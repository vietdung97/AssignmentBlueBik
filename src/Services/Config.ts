export const EnvType = {
  STG: 0,
  DEV: 1,
  PROD: 2,
};
export const APP_ENV = EnvType.PROD;

export const StgConfig = {
  API_URL: '',
  BASE_URL: '',
  BASE_API: '',
  SOCKET_URL: '',
};
export const DevConfig = {
  API_URL: '',
  BASE_URL: '',
  BASE_API: '',
  SOCKET_URL: '',
};
export const ProdConfig = {
  API_URL: '',
  BASE_URL: '',
  BASE_API: '',
  SOCKET_URL: '',
};
export const CommonConfig = {};
//Mixed Config
export const Config = {
  ...CommonConfig,
  ...(APP_ENV === EnvType.DEV && DevConfig),
  ...(APP_ENV === EnvType.STG && StgConfig),
  ...(APP_ENV === EnvType.PROD && ProdConfig),
};

export const baseURL = Config.BASE_URL;
export const socketURL = baseURL;
export const socketChatURL = baseURL + '/chat';
export const apiURL = baseURL + '/api/v1';

export const headers = {
  'Content-Type': 'application/json',
};

export const timeout = 10000;
