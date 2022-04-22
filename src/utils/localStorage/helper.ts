export function getLocalStorage<T>(key: string): T | null;
export function getLocalStorage<T>(key: string, defaultValue: T): T;
export function getLocalStorage(key: string, defaultValue = null) {
  if (typeof window === 'undefined') return defaultValue;
  const value = localStorage.getItem(key);
  if (!value) return defaultValue;
  return JSON.parse(value);
}

export const setLocalStorage = <T = any>(
  key: string,
  value: T,
  defaultValue?: T,
) => {
  if (typeof window === 'undefined') {
    console.error('can not access without window');
    return;
  }
  localStorage.setItem(key, JSON.stringify(value || defaultValue));
};

export const removeLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    console.error('can not access without window');
    return;
  }
  localStorage.removeItem(key);
};
