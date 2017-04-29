/// <reference types="node" />
import { Smartfile } from 'smartfile';
import { Transform } from 'stream';
export declare class GulpStream {
    stream: Transform;
    /**
     * allows you to pipe a SmartfileArray into the stream
     */
    pipeSmartfileArray(smartfileArray: Smartfile[]): Promise<void>;
}
