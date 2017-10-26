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
            var BuffFrozen = (function (_super) {
                __extends(BuffFrozen, _super);
                function BuffFrozen(param1) {
                    var _this = _super.call(this, param1) || this;
                    _this.name = "frozen";
                    _this.count = param1;
                    return _this;
                }
                BuffFrozen.prototype.run = function () {
                    this.count--;
                    iPanel.iScene.MainScene.allInfoPanel.addText(iPanel.iScene.MainScene.battle.monster.nameHtml + "被<font color=\'#ff4040\'>冰冻了!</font>", iGlobal.Global.battle);
                };
                BuffFrozen.prototype.combine = function (param1) {
                    this.count = param1.count;
                };
                return BuffFrozen;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffFrozen = BuffFrozen;
            __reflect(BuffFrozen.prototype, "iData.iSkill.iBuff.BuffFrozen");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
//# sourceMappingURL=BuffFrozen.js.map