var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pet_zombie = (function (_super) {
    __extends(pet_zombie, _super);
    function pet_zombie() {
        return _super.call(this) || this;
    }
    return pet_zombie;
}(egret.MovieClip));
__reflect(pet_zombie.prototype, "pet_zombie");
//# sourceMappingURL=pet_zombie.js.map