var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pet_unicorn = (function (_super) {
    __extends(pet_unicorn, _super);
    function pet_unicorn() {
        return _super.call(this) || this;
    }
    return pet_unicorn;
}(egret.MovieClip));
__reflect(pet_unicorn.prototype, "pet_unicorn");
//# sourceMappingURL=pet_unicorn.js.map