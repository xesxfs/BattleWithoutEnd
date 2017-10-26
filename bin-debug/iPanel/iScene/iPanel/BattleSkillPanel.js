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
            var BattleSkillPanel = (function (_super) {
                __extends(BattleSkillPanel, _super);
                function BattleSkillPanel() {
                    var _this = _super.call(this, 170, 165) || this;
                    var _loc1_ = new iPanel.iScene.iPanel.iBattleSkill.BattleSkillOutterPanel();
                    _this.addChild(_loc1_);
                    _loc1_.y = 10;
                    _this.panel = flash.As3As(_loc1_.innerPanel, iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel);
                    _this.update();
                    return _this;
                }
                BattleSkillPanel.prototype.update = function () {
                    this.panel.update();
                };
                return BattleSkillPanel;
            }(iPanel.iCell.BasicCell));
            iPanel.BattleSkillPanel = BattleSkillPanel;
            __reflect(BattleSkillPanel.prototype, "iPanel.iScene.iPanel.BattleSkillPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.BattleSkillPanel", "iPanel.iCell.BasicCell");
//# sourceMappingURL=BattleSkillPanel.js.map