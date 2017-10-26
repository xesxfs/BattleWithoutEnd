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
            var BuffPoison = (function (_super) {
                __extends(BuffPoison, _super);
                function BuffPoison(param1) {
                    var _this = _super.call(this, param1) || this;
                    param1 = param1;
                    _this.name = "poison";
                    _this.count = param1;
                    return _this;
                }
                BuffPoison.prototype.run = function () {
                    iPanel.iScene.MainScene.battle.monsterHp = iPanel.iScene.MainScene.battle.monsterHp - this.count;
                    iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>毒</font>对" + iPanel.iScene.MainScene.battle.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + this.count + "</font>伤害 ", iGlobal.Global.battle);
                };
                BuffPoison.prototype.combine = function (param1) {
                    this.count = this.count + param1.count;
                };
                return BuffPoison;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffPoison = BuffPoison;
            __reflect(BuffPoison.prototype, "iData.iSkill.iBuff.BuffPoison");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=BuffPoison.js.map