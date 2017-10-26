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
        var PassiveSkill = (function (_super) {
            __extends(PassiveSkill, _super);
            function PassiveSkill(param1) {
                return _super.call(this, param1) || this;
            }
            return PassiveSkill;
        }(iData.iSkill.Skill));
        iSkill.PassiveSkill = PassiveSkill;
        __reflect(PassiveSkill.prototype, "iData.iSkill.PassiveSkill");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=PassiveSkill.js.map