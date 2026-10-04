// Next Link prefixes basePath itself. Native form actions and image URLs do not.
export function sitePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
