"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// this file contains the implementation of the standard gulp api
const plugins = require("./smartgulp.plugins");
const smartgulp_classes_gulpstream_1 = require("./smartgulp.classes.gulpstream");
exports.src = (minimatchPathArrayArg) => {
    let gulpStream = new smartgulp_classes_gulpstream_1.GulpStream();
    let handleFiles = () => __awaiter(this, void 0, void 0, function* () {
        let smartfileArray = [];
        for (let minimatchPath of minimatchPathArrayArg) {
            let localSmartfileArray = yield plugins.smartfile.fs.fileTreeToObject(process.cwd(), minimatchPath);
            smartfileArray = plugins.lodash.concat(smartfileArray, localSmartfileArray);
        }
        gulpStream.pipeSmartfileArray(smartfileArray);
    });
    handleFiles().catch(err => {
        console.log(err);
    });
    return gulpStream.stream;
};
exports.dest = (dirArg) => {
};
exports.replace = () => {
    return plugins.through2.obj((file, enc, cb) => __awaiter(this, void 0, void 0, function* () {
        yield file.write();
        cb(file);
    }), (cb) => {
        cb();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRndWxwLmd1bHBhcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGd1bHAuZ3VscGFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQWlFO0FBQ2pFLCtDQUE4QztBQUM5QyxpRkFBMkQ7QUFLaEQsUUFBQSxHQUFHLEdBQUcsQ0FBQyxxQkFBK0IsRUFBYSxFQUFFO0lBQzlELElBQUksVUFBVSxHQUFHLElBQUkseUNBQVUsRUFBRSxDQUFBO0lBQ2pDLElBQUksV0FBVyxHQUFHLEdBQVMsRUFBRTtRQUMzQixJQUFJLGNBQWMsR0FBZ0IsRUFBRSxDQUFBO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxJQUFJLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLG1CQUFtQixHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBQ25HLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtRQUM3RSxDQUFDO1FBQ0QsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQy9DLENBQUMsQ0FBQSxDQUFBO0lBQ0QsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQTtBQUMxQixDQUFDLENBQUE7QUFFVSxRQUFBLElBQUksR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0FBRXJDLENBQUMsQ0FBQTtBQUVVLFFBQUEsT0FBTyxHQUFHLEdBQUcsRUFBRTtJQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBTyxJQUFlLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzdELE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNWLENBQUMsQ0FBQSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDUixFQUFFLEVBQUUsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=