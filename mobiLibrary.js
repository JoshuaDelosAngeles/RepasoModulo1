"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles, totalPrice) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = totalPrice;
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setName = function (newName) {
        this.name = newName;
    };
    MobileLibrary.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    MobileLibrary.prototype.setMobile = function (newMobile) {
        this.mobiles = newMobile;
    };
    MobileLibrary.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var i in this.mobiles) {
            total += this.mobiles[i].getPrice();
        }
        return total;
    };
    MobileLibrary.prototype.printLibrary = function () {
        var result = ("This is all my mobiles: \n");
        var resultfinal = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            result += ("".concat(this.mobiles[i].print(), " \n"));
        }
        resultfinal = "".concat(result, " Price Overall: ").concat(this.totalPrice);
        return resultfinal;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
