import { join } from 'path';

export default function getNode(): string {
  if (process.platform === 'darwin' && process.resourcesPath) {
    return join(process.resourcesPath, '..', 'Frameworks', 'Atom Helper.app', 'Contents', 'MacOS', 'Atom Helper');
  } else if (process.platform.match(/win/)) {
    return 'node';
  }
  return process.execPath;
}
