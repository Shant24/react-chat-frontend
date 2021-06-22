import StorageManager from '../StorageManager';
import { REFRESH_TOKEN_KEY } from '../constants';

const getRefreshToken = (): string | null => {
  const token = StorageManager.getItem(REFRESH_TOKEN_KEY);
  return token || null;
};

export default getRefreshToken;
