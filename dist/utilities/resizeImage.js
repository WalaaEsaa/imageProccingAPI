"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//impot file system to read image
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
function resize(path, formate, width, height) {
    //  function resize( width: number, height: number) {
    // creat read stream
    var readStream = fs_1.default.createReadStream(path);
    var transform = (0, sharp_1.default)();
    return readStream.pipe(transform);
}
exports.default = {
    sharp: sharp_1.default,
    resize: resize
};
