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
            var AttackPetSkillData = (function (_super) {
                __extends(AttackPetSkillData, _super);
                function AttackPetSkillData(name, realName, setList, beaFunction, desFunction) {
                    return _super.call(this, name, realName, setList, beaFunction, desFunction) || this;
                }
                return AttackPetSkillData;
            }(iData.iPet.iPetSkill.PetSkillData));
            iPetSkill.AttackPetSkillData = AttackPetSkillData;
            __reflect(AttackPetSkillData.prototype, "iData.iPet.iPetSkill.AttackPetSkillData");
        })(iPetSkill = iPet.iPetSkill || (iPet.iPetSkill = {}));
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
//# sourceMappingURL=AttackPetSkillData.js.map