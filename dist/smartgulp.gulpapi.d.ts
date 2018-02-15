/// <reference types="node" />
import { Transform } from 'stream';
export declare let src: (minimatchPathArrayArg: string[]) => Transform;
export declare let dest: (dirArg: string) => void;
export declare let replace: () => Transform;
