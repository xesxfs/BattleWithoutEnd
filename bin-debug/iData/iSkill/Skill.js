var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var Skill = (function () {
            function Skill(param1) {
                this.level = 0;
                this.skillData = param1;
                this.level = 0;
            }
            Skill.load = function (param1) {
                var _loc3_ = null;
                var _loc2_ = param1.split("#");
                var _loc4_ = 0;
                while (_loc4_ < iData.iSkill.SkillDataList.list.length) {
                    if (iData.iSkill.SkillDataList.list[_loc4_].name == _loc2_[1]) {
                        //这里
                        if (iData.iSkill.SkillDataList.list[_loc4_] instanceof iData.iSkill.PassiveSkillData) {
                            //这里
                            _loc3_ = new iData.iSkill.PassiveSkill(iData.iSkill.SkillDataList.list[_loc4_]);
                        }
                        else {
                            //这里
                            _loc3_ = new iData.iSkill.ActiveSkill(iData.iSkill.SkillDataList.list[_loc4_]);
                        }
                        break;
                    }
                    _loc4_++;
                }
                _loc3_.level = _loc2_[0];
                return _loc3_;
            };
            Skill.prototype.getDescription = function () {
                if (this.skillData.desFunction) {
                    return this.skillData.desFunction(this);
                }
                return "no function";
            };
            Skill.prototype.levelup = function () {
                iGlobal.Player.addAp(-this.skillData.lvupCostList[this.level + 1]);
                this.level++;
                iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>Skill " + this.skillData.name + " level up to " + (15 - this.level).toString(16).toUpperCase() + "!</font>.");
                if (this.level == 14) {
                    iData.iPlayer.TitleList.updateTitleInfo(this.skillData.name);
                }
            };
            Skill.prototype.canLevelup = function () {
                if (this.level >= 14) {
                    return false;
                }
                if (this.skillData.lvupCostList[this.level + 1] > iGlobal.Player.ap) {
                    return false;
                }
                return true;
            };
            Skill.prototype.save = function () {
                var _loc1_ = "";
                _loc1_ = _loc1_ + (this.level + "#" + this.skillData.name);
                return _loc1_;
            };
            return Skill;
        }());
        iSkill.Skill = Skill;
        __reflect(Skill.prototype, "iData.iSkill.Skill");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=Skill.js.map