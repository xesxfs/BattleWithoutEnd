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
                var iSkill;
                (function (iSkill) {
                    var ActiveSkillCell = (function (_super) {
                        __extends(ActiveSkillCell, _super);
                        function ActiveSkillCell(param1) {
                            var _this = _super.call(this, param1) || this;
                            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, flash.bind(_this.onMouseDown, _this), null);
                            return _this;
                        }
                        ActiveSkillCell.prototype.onMouseDown = function (param1) {
                            if (flash.As3is(param1.target, doubleCircle) || flash.As3is(param1.target, mc_lvup)) {
                                return;
                            }
                            if (iGlobal.Player.isSkillEquiped(this.skill)) {
                                iGlobal.Player.unequipSkill(this.skill);
                            }
                            else {
                                iGlobal.Player.equipSkill(this.skill);
                            }
                            this.updateEquip();
                        };
                        ActiveSkillCell.prototype.updateEquip = function () {
                            if (iGlobal.Player.isSkillEquiped(this.skill)) {
                                this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 1, 0, 0, 0, 0);
                                this.mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
                                this.text["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
                            }
                            else {
                                this.bg["transform"].colorTransform = new flash.ColorTransform();
                                this.mc["transform"].colorTransform = new flash.ColorTransform();
                                this.text["transform"].colorTransform = new flash.ColorTransform();
                            }
                        };
                        return ActiveSkillCell;
                    }(iPanel.iScene.iPanel.iWindow.iSkill.SkillCell));
                    iSkill.ActiveSkillCell = ActiveSkillCell;
                    __reflect(ActiveSkillCell.prototype, "iPanel.iScene.iPanel.iWindow.iSkill.ActiveSkillCell");
                })(iSkill = iWindow.iSkill || (iWindow.iSkill = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.ActiveSkillCell", "iPanel.iScene.iPanel.iWindow.iSkill.SkillCell");
//# sourceMappingURL=ActiveSkillCell.js.map