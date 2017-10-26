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
                    var StringButton = (function (_super) {
                        __extends(StringButton, _super);
                        function StringButton(param1, param2) {
                            var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                            _this.color = 0;
                            param2 = flash.checkUint(param2);
                            _this.bg = new iPanel.iCell.BasicCell(66, 25);
                            _this.addChild(_this.bg);
                            _this.text = param1;
                            _this.color = flash.checkUint(param2);
                            _this.init();
                            return _this;
                        }
                        StringButton.prototype.init = function () {
                            var _loc1_ = iGlobal.Global.getTextField(18);
                            _loc1_.htmlText = "<p align=\'center\'>" + this.text + "</p>";
                            _loc1_.width = 60;
                            this.before.addChild(_loc1_);
                            _loc1_.x = 2;
                            _loc1_.y = 2;
                            var _loc2_ = iGlobal.Global.getTextField(18);
                            _loc2_.htmlText = "<p align=\'center\'>" + this.text + "</p>";
                            _loc2_.width = 60;
                            this.after.addChild(_loc2_);
                            _loc2_.x = 2;
                            _loc2_.y = 2;
                            _loc2_.textColor = flash.checkUint(this.color);
                        };
                        StringButton.prototype.setBefore = function () {
                            _super.prototype.setBefore.call(this);
                            this.filters = [];
                        };
                        StringButton.prototype.setDown = function () {
                            _super.prototype.setDown.call(this);
                            this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
                            if (this.parent) {
                                this.parent.addChildAt(this, this.parent.numChildren - 1);
                            }
                        };
                        return StringButton;
                    }(iPanel.iCell.ButtonCell));
                    iSkill.StringButton = StringButton;
                    __reflect(StringButton.prototype, "iPanel.iScene.iPanel.iWindow.iSkill.StringButton");
                })(iSkill = iWindow.iSkill || (iWindow.iSkill = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.StringButton", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=StringButton.js.map