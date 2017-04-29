"use strict";
// this file contains the code to generate and handle the stream
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartgulp.plugins");
const stream_1 = require("stream");
class GulpStream {
    constructor() {
        this.stream = new stream_1.Transform({ objectMode: true });
    }
    /**
     * allows you to pipe a SmartfileArray into the stream
     */
    pipeSmartfileArray(smartfileArray) {
        return __awaiter(this, void 0, void 0, function* () {
            // ensure what we get is an array
            if (!Array.isArray(smartfileArray)) {
                throw new Error('fileArg has unknown format');
            }
            for (let smartfile of smartfileArray) {
                let hasWritten = this.stream.push(smartfile);
                if (!hasWritten) {
                    yield plugins.smartevent.once(this.stream, 'drain');
                }
                else {
                    // iterate
                }
            }
            ;
            // signal end of stream;
            this.stream.push(null);
        });
    }
}
exports.GulpStream = GulpStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRndWxwLmNsYXNzZXMuZ3VscHN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z3VscC5jbGFzc2VzLmd1bHBzdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdFQUFnRTs7Ozs7Ozs7OztBQUVoRSwrQ0FBOEM7QUFHOUMsbUNBQWtDO0FBRWxDO0lBQUE7UUFDRSxXQUFNLEdBQUcsSUFBSSxrQkFBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFxQjlDLENBQUM7SUFuQkM7O09BRUc7SUFDRyxrQkFBa0IsQ0FBQyxjQUEyQjs7WUFDbEQsaUNBQWlDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtZQUMvQyxDQUFDO1lBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUNyRCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLFVBQVU7Z0JBQ1osQ0FBQztZQUNILENBQUM7WUFBQSxDQUFDO1lBQ0Ysd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLENBQUM7S0FBQTtDQUNGO0FBdEJELGdDQXNCQyJ9