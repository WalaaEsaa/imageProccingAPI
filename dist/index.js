"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import route from 'router';
var sharp_1 = __importDefault(require("sharp"));
//import fs from'fs';
var resizeImage_1 = __importDefault(require("./utilities/resizeImage"));
sharp_1.default;
//intialize new server
var app = (0, express_1.default)();
var port = 4000;
//root: URL has to be requested to get the image (get image from server)
app.get('/api', function (req, res) {
    res.send('hiiiiiiii');
    //extract quary parameter
    var Swidth = req.query.width;
    var Sheight = req.query.height;
    var format = req.query.formate;
    res.type("images/".concat(format || 'jpg'));
    (0, resizeImage_1.default)('images/fjord.jpg', format, Swidth, Sheight).pipe(res);
});
// listen server to port 4000
app.listen(port, function () { return console.log("listinig port ".concat(port)); });
exports.default = app;
