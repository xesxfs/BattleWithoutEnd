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
            var BuffBurn = (function (_super) {
                __extends(BuffBurn, _super);
                function BuffBurn(param1) {
                    var _this = _super.call(this, param1) || this;
                    _this.name = "burn";
                    _this.count = param1;
                    return _this;
                }
                BuffBurn.prototype.run = function () {
                    iPanel.iScene.MainScene.battle.monsterHp = iPanel.iScene.MainScene.battle.monsterHp - this.count;
                    iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>灼伤</font>对" + iPanel.iScene.MainScene.battle.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + this.count + "</font>伤害", iGlobal.Global.battle);
                };
                BuffBurn.prototype.combine = function (param1) {
                    this.count = this.count + param1.count;
                };
                return BuffBurn;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffBurn = BuffBurn;
            __reflect(BuffBurn.prototype, "iData.iSkill.iBuff.BuffBurn");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=BuffBurn.js.map