var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var iBuff;
        (function (iBuff) {
            var Buff = (function (_super) {
                __extends(Buff, _super);
                function Buff(param1) {
                    var _this = _super.call(this) || this;
                    _this.count = 0;
                    return _this;
                }
                Buff.prototype.run = function () {
                };
                Buff.prototype.combine = function (param1) {
                };
                Buff.prototype.isOver = function () {
                    if (this.count <= 0) {
                        return true;
                    }
                    return false;
                };
                return Buff;
            }(egret.HashObject));
            iBuff.Buff = Buff;
            __reflect(Buff.prototype, "iData.iSkill.iBuff.Buff");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=Buff.js.map