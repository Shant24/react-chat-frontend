import StorageManager from '../StorageManager';
import { ACCESS_TOKEN_KEY } from '../constants';

const getAccessToken = (): string | null => {
  const token = StorageManager.getItem(ACCESS_TOKEN_KEY);
  return token || null;
};

export default getAccessToken;
