// this file contains the implementation of the standard gulp api
import * as plugins from './smartgulp.plugins';
import { GulpStream } from './smartgulp.classes.gulpstream';
import { Transform } from 'stream';

import { Smartfile } from '@pushrocks/smartfile';

export let src = (minimatchPathArrayArg: string[]): Transform => {
  let gulpStream = new GulpStream();
  let handleFiles = async () => {
    let smartfileArray: Smartfile[] = [];
    for (let minimatchPath of minimatchPathArrayArg) {
      let localSmartfileArray = await plugins.smartfile.fs.fileTreeToObject(
        process.cwd(),
        minimatchPath
      );
      smartfileArray = plugins.lodash.concat(smartfileArray, localSmartfileArray);
    }
    gulpStream.pipeSmartfileArray(smartfileArray);
  };
  handleFiles().catch(err => {
    console.log(err);
  });
  return gulpStream.stream;
};

export let dest = (dirArg: string) => {};

export let replace = () => {
  return plugins.through2.obj(
    async (file: Smartfile, enc, cb) => {
      await file.write();
      cb(null, file);
    },
    cb => {
      cb();
    }
  );
};
