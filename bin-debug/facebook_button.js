var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var facebook_button = (function (_super) {
    __extends(facebook_button, _super);
    function facebook_button() {
        return _super.call(this) || this;
    }
    return facebook_button;
}(egret.Bitmap));
__reflect(facebook_button.prototype, "facebook_button");
//# sourceMappingURL=facebook_button.js.map