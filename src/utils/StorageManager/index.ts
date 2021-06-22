class StorageManager {
  static setItem = (key: Required<string>, data: any) => {
    try {
      const serializedState = JSON.stringify(data);
      localStorage.setItem(key, serializedState);
    } catch {
      // ignore write errors
    }
  };

  static getItem = (key: Required<string>) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      // ignore write errors
    }
  };

  static removeItem = (key: Required<string>) => {
    localStorage.removeItem(key);
  };
}

export default StorageManager;
