// Remove all spaces & newlines
export function stringCleaner(str: string) {
  return str ? str.replace(/\s+/g, '').replace(/\n+/g, '') : str;
}