var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel_1) {
    var iScene;
    (function (iScene) {
        var iPanel;
        (function (iPanel) {
            var iBattleSkill;
            (function (iBattleSkill) {
                var BattleSkillOutterPanel = (function (_super) {
                    __extends(BattleSkillOutterPanel, _super);
                    function BattleSkillOutterPanel() {
                        return _super.call(this, 155, false) || this;
                    }
                    BattleSkillOutterPanel.prototype.setInnerPanel = function () {
                        this.innerPanel = new iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel();
                        this.addChild(this.innerPanel);
                    };
                    return BattleSkillOutterPanel;
                }(iPanel.OutterPanel));
                iBattleSkill.BattleSkillOutterPanel = BattleSkillOutterPanel;
                __reflect(BattleSkillOutterPanel.prototype, "iPanel.iScene.iPanel.iBattleSkill.BattleSkillOutterPanel");
            })(iBattleSkill = iPanel.iBattleSkill || (iPanel.iBattleSkill = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iBattleSkill.BattleSkillOutterPanel", "iPanel.OutterPanel");
//# sourceMappingURL=BattleSkillOutterPanel.js.map