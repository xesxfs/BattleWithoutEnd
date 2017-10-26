var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var brand_mc = (function (_super) {
    __extends(brand_mc, _super);
    function brand_mc() {
        var _this = _super.call(this) || this;
        _this["addFrameScript"](320, _this.frame321, _this);
        return _this;
    }
    brand_mc.prototype.frame321 = function () {
        var _self__ = this;
        _self__.stop();
    };
    return brand_mc;
}(egret.MovieClip));
__reflect(brand_mc.prototype, "brand_mc");
//# sourceMappingURL=brand_mc.js.map