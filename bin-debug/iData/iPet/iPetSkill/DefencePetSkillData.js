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
    var iPet;
    (function (iPet) {
        var iPetSkill;
        (function (iPetSkill) {
            var DefencePetSkillData = (function (_super) {
                __extends(DefencePetSkillData, _super);
                function DefencePetSkillData(name, realName, setList, behaveFunction, desFunction) {
                    return _super.call(this, name, realName, setList, behaveFunction, desFunction) || this;
                }
                return DefencePetSkillData;
            }(iData.iPet.iPetSkill.PetSkillData));
            iPetSkill.DefencePetSkillData = DefencePetSkillData;
            __reflect(DefencePetSkillData.prototype, "iData.iPet.iPetSkill.DefencePetSkillData");
        })(iPetSkill = iPet.iPetSkill || (iPet.iPetSkill = {}));
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
//# sourceMappingURL=DefencePetSkillData.js.map