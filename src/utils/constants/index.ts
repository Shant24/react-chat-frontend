export const API_URL: string | undefined = process.env.REACT_APP_API_URL;

export const ACCESS_TOKEN_KEY: string = 'access_token';
export const REFRESH_TOKEN_KEY: string = 'refresh_token';

export const REGEXP = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  username: /^((?=.*[A-Za-z])|(?=.*[A-Za-z])(?=.*\d))[A-Za-z\d_-]{2,30}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
};
