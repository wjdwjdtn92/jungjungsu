export function checkActivePath(path: string, activePath: string) {
  if (path === '/') {
    return path === activePath;
  }

  return activePath.startsWith(path);
}
