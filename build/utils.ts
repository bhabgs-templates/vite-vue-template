import { resolve } from 'path';

export const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir);
