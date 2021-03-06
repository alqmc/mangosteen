import { resolve } from 'path';
import { copyFile } from 'fs/promises';
import { copyDir } from '../package/utils/utils';
import { enterPath, outputPath, rootPath } from './utils/path';
export const copyFiles = async () => {
  Promise.all([
    copyFile(
      resolve(enterPath, 'package.json'),
      resolve(outputPath, 'package.json')
    ),
    copyFile(resolve(rootPath, 'README.md'), resolve(outputPath, 'README.md')),
    copyDir(resolve(enterPath, 'assets'), resolve(outputPath, 'assets')),
  ]);
};
