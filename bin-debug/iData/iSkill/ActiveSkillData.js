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
        var ActiveSkillData = (function (_super) {
            __extends(ActiveSkillData, _super);
            function ActiveSkillData(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
                if (param10 === void 0) { param10 = null; }
                var _this = _super.call(this, param1, param2, param4, param5, param6, param7, param9) || this;
                _this.type = param3;
                _this.setList = param8;
                _this.behaveFunction = param10;
                return _this;
            }
            return ActiveSkillData;
        }(iData.iSkill.SkillData));
        iSkill.ActiveSkillData = ActiveSkillData;
        __reflect(ActiveSkillData.prototype, "iData.iSkill.ActiveSkillData");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=ActiveSkillData.js.map