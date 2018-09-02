// this file contains the code to generate and handle the stream

import * as plugins from './smartgulp.plugins';
import { Smartfile } from '@pushrocks/smartfile';

import { Transform } from 'stream';

export class GulpStream {
  stream = new Transform({ objectMode: true });

  /**
   * allows you to pipe a SmartfileArray into the stream
   */
  async pipeSmartfileArray(smartfileArray: Smartfile[]) {
    // ensure what we get is an array
    if (!Array.isArray(smartfileArray)) {
      throw new Error('fileArg has unknown format');
    }
    for (let smartfile of smartfileArray) {
      let hasWritten = this.stream.push(smartfile);
      if (!hasWritten) {
        await plugins.smartevent.once(this.stream, 'drain');
      } else {
        // iterate
      }
    }
    // signal end of stream;
    this.stream.push(null);
  }
}
