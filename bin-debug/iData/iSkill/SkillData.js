var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var SkillData = (function () {
            function SkillData(param1, param2, param3, param4, param5, param6, param7) {
                this.name = param1;
                this.realName = param2;
                this.category = param3;
                this.statList = param4;
                this.effectList = param5;
                this.lvupCostList = param6;
                this.desFunction = param7;
            }
            return SkillData;
        }());
        iSkill.SkillData = SkillData;
        __reflect(SkillData.prototype, "iData.iSkill.SkillData");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=SkillData.js.map