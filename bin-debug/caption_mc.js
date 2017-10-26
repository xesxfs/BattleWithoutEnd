var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var caption_mc = (function (_super) {
    __extends(caption_mc, _super);
    function caption_mc() {
        var _this = _super.call(this) || this;
        _this["addFrameScript"](203, _this.frame204, _this);
        return _this;
    }
    caption_mc.prototype.frame204 = function () {
        var _self__ = this;
        _self__.gotoAndPlay("loop");
    };
    return caption_mc;
}(egret.MovieClip));
__reflect(caption_mc.prototype, "caption_mc");
//# sourceMappingURL=caption_mc.js.map