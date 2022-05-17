"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.print = function () {
        return ("The characteristics of the mobile name are: \n Name: ".concat(this.name, " \n Model: ").concat(this.model, " \n Trademark: ").concat(this.trademark, " \n SD Size (GB): ").concat(this.sdSize, " \n Color: ").concat(this.color, " \n Is 5g?: ").concat(this.is5G, " \n Number of Cameras: ").concat(this.cameraNumber, " "));
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (newname) {
        return this.name = newname;
    };
    Mobile.prototype.setModel = function (newmodel) {
        return this.model = newmodel;
    };
    Mobile.prototype.setTrademark = function (newtrademark) {
        return this.trademark = newtrademark;
    };
    Mobile.prototype.setSdSize = function (newsdsize) {
        return this.sdSize = newsdsize;
    };
    Mobile.prototype.setColor = function (newcolor) {
        return this.color = newcolor;
    };
    Mobile.prototype.setIs5G = function (newis5g) {
        return this.is5G = newis5g;
    };
    Mobile.prototype.setCameraNumber = function (newcameranum) {
        return this.cameraNumber = newcameranum;
    };
    Mobile.prototype.setPrice = function (newprice) {
        return this.price = newprice;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
