export function getLocalStore(key: string, initData) {
  return JSON.parse(localStorage.getItem(key)) ?? initData ?? undefined;
}
export function setLocalStore(key: string, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function deleteLocalStore(key: string) {
  localStorage.delete(key);
}
