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
            var iWindow;
            (function (iWindow) {
                var SkillWindow = (function (_super) {
                    __extends(SkillWindow, _super);
                    function SkillWindow() {
                        var _this = _super.call(this) || this;
                        var _self__ = _this;
                        ;
                        var passive = null;
                        var _this = undefined;
                        var combatDown = null;
                        var magicDown = null;
                        var passiveDown = null;
                        combatDown = function () {
                            removePanel();
                            _self__.panel = _self__.combatPanel;
                            _this.addChild(_self__.panel);
                            _self__.panel.y = 25;
                        };
                        magicDown = function () {
                            removePanel();
                            _self__.panel = _self__.magicPanel;
                            _this.addChild(_self__.panel);
                            _self__.panel.y = 25;
                        };
                        passiveDown = function () {
                            removePanel();
                            _self__.panel = _self__.passivePanel;
                            _this.addChild(_self__.panel);
                            _self__.panel.y = 25;
                        };
                        var removePanel = function () {
                            if (_this.panel) {
                                _this.removeChild(_self__.panel);
                            }
                        };
                        var buttonSprite = new egret.Sprite();
                        _this.addChild(buttonSprite);
                        var combat = new iPanel.iScene.iPanel.iWindow.iSkill.StringButton("战斗", iGlobal.Global.RED);
                        buttonSprite.addChild(combat);
                        var magic = new iPanel.iScene.iPanel.iWindow.iSkill.StringButton("魔法", iGlobal.Global.BLUE);
                        buttonSprite.addChild(magic);
                        magic.x = 67;
                        passive = new iPanel.iScene.iPanel.iWindow.iSkill.StringButton("被动", iGlobal.Global.YELLOW);
                        buttonSprite.addChild(passive);
                        passive.x = 134;
                        var buttonGroup = new iPanel.iCell.ButtonGroup();
                        buttonGroup.addButton(combat);
                        buttonGroup.addButton(magic);
                        buttonGroup.addButton(passive);
                        _this.combatPanel = new iPanel.iScene.iPanel.iWindow.iSkill.CombatOutterPanel();
                        _this.magicPanel = new iPanel.iScene.iPanel.iWindow.iSkill.MagicOutterPanel();
                        _this.passivePanel = new iPanel.iScene.iPanel.iWindow.iSkill.PassiveOutterPanel();
                        _this.addEventListener(tool.MyEvent.Update, flash.bind(_this.onUpdate, _this), null, true);
                        combat.downFunction = combatDown;
                        _this = _this;
                        magic.downFunction = magicDown;
                        passive.downFunction = passiveDown;
                        return _this;
                    }
                    SkillWindow.prototype.onUpdate = function (param1) {
                        if (param1 === void 0) { param1 = null; }
                        (flash.As3As(this.combatPanel.innerPanel, iPanel.iScene.iPanel.iWindow.iSkill.CombatInnerPanel)).update();
                        (flash.As3As(this.magicPanel.innerPanel, iPanel.iScene.iPanel.iWindow.iSkill.MagicInnerPanel)).update();
                        (flash.As3As(this.passivePanel.innerPanel, iPanel.iScene.iPanel.iWindow.iSkill.PassiveInnerPanel)).update();
                        iGlobal.Player.updateSkillInfo();
                    };
                    return SkillWindow;
                }(iPanel.iScene.iPanel.iWindow.Window));
                iWindow.SkillWindow = SkillWindow;
                __reflect(SkillWindow.prototype, "iPanel.iScene.iPanel.iWindow.SkillWindow");
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.SkillWindow", "iPanel.iScene.iPanel.iWindow.Window");
//# sourceMappingURL=SkillWindow.js.map