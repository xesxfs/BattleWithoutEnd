var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tool;
(function (tool) {
    var HideMessageParticle = (function (_super) {
        __extends(HideMessageParticle, _super);
        function HideMessageParticle(param1, param2, param3) {
            var _this = _super.call(this) || this;
            _this.x = NaN;
            _this.y = NaN;
            _this.ax = NaN;
            _this.ay = NaN;
            _this.vx = NaN;
            _this.vy = NaN;
            _this.color = 0;
            _this = _super.call(this) || this;
            var _loc4_ = NaN;
            var _loc5_ = NaN;
            _loc4_ = Math.random() * 5;
            _loc5_ = Math.random() * Math.PI * 2;
            _this.ax = Math.cos(_loc5_) * _loc4_;
            _this.ay = Math.sin(_loc5_) * _loc4_;
            _this.x = param1;
            _this.y = param2;
            _this.color = flash.checkUint(param3);
            _this.vx = 0;
            _this.vy = 0;
            return _this;
        }
        HideMessageParticle.prototype.update = function () {
            this.vx = this.vx + this.ax;
            this.vy = this.vy + this.ay;
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
        };
        return HideMessageParticle;
    }(egret.HashObject));
    tool.HideMessageParticle = HideMessageParticle;
    __reflect(HideMessageParticle.prototype, "tool.HideMessageParticle");
})(tool || (tool = {}));
//# sourceMappingURL=HideMessageParticle.js.map