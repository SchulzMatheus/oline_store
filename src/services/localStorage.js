export function setItem(string, y) {
  return localStorage.setItem(string, JSON.stringify(y));
}
export function getItem(string) { return localStorage.getItem(string); }
