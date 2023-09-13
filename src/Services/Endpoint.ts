import { Config } from '@/Services/Config';

export default () => {
  const baseUrl = Config.BASE_URL;
  const apiUrl = Config.API_URL;
  const socketUrl = Config.SOCKET_URL;
  return {
    baseUrl,
    apiUrl,
    socketUrl,
    //auth
    login: `${apiUrl}/login`,
    logout: `${apiUrl}/logout`,
    register: `${apiUrl}/register`,
    forgotPassword: `${apiUrl}/forgot-password`,
    resetPassword: `${apiUrl}/reset-password`,
    //posts
  };
};
