var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mc_forge = (function (_super) {
    __extends(mc_forge, _super);
    function mc_forge() {
        return _super.call(this) || this;
    }
    return mc_forge;
}(egret.MovieClip));
__reflect(mc_forge.prototype, "mc_forge");
//# sourceMappingURL=mc_forge.js.map