export function getLocalStore(key: string, initData) {
  try {
    const data = JSON.parse(localStorage.getItem(key) ?? null);
    return data ?? initData ?? null;
  } catch {
    return initData ?? null;
  }
}
export function setLocalStore(key: string, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value ?? null));
  } catch {}
}
export function deleteLocalStore(key: string) {
  try {
    localStorage.delete(key);
  } catch {}
}
