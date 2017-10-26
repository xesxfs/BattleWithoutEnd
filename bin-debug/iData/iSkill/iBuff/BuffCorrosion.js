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
            var BuffCorrosion = (function (_super) {
                __extends(BuffCorrosion, _super);
                function BuffCorrosion(param1) {
                    var _this = _super.call(this, param1) || this;
                    _this.name = "corrosion";
                    _this.count = param1;
                    return _this;
                }
                BuffCorrosion.prototype.run = function () {
                };
                BuffCorrosion.prototype.combine = function (param1) {
                    this.count = this.count + param1.count;
                };
                return BuffCorrosion;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffCorrosion = BuffCorrosion;
            __reflect(BuffCorrosion.prototype, "iData.iSkill.iBuff.BuffCorrosion");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=BuffCorrosion.js.map