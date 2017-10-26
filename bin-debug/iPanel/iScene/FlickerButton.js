var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel) {
    var iScene;
    (function (iScene) {
        var FlickerButton = (function (_super) {
            __extends(FlickerButton, _super);
            function FlickerButton(param1, param2, param3, param4) {
                if (param4 === void 0) { param4 = 32; }
                var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                _this.count = 0;
                _this.flag = true;
                _this.flickerTime = 30;
                _this.bg = new iScene.iPanel.iCell.BasicCell(param2, param3);
                _this.addChild(_this.bg);
                var _loc5_ = iGlobal.Global.getTextField(param4);
                iGlobal.Global.getTextField(param4).width = param2;
                _loc5_.text = param1;
                _this.before.addChild(_loc5_);
                _this.before.x = param2 / 2 - _loc5_.textWidth / 2;
                _this.before.y = param3 / 2 - _loc5_.textHeight / 2;
                var _loc6_ = iGlobal.Global.getTextField(param4, 16777215);
                _loc6_.width = param2;
                _loc6_.text = param1;
                _this.after.addChild(_loc6_);
                _this.after.x = param2 / 2 - _loc6_.textWidth / 2;
                _this.after.y = param3 / 2 - _loc6_.textHeight / 2;
                return _this;
            }
            FlickerButton.prototype.setAfter = function () {
                _super.prototype.setAfter.call(this);
                this.addEventListener(egret.Event.ENTER_FRAME, flash.bind(this.overAnimation, this), null);
            };
            FlickerButton.prototype.overAnimation = function (param1) {
                if (this.count <= this.flickerTime) {
                    this.filters = [new flash.GlowFilter(5066061, 0.66, 13 + this.count, 13 + this.count)];
                    this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.1 / this.flickerTime * this.count, 1 - 0.3 / this.flickerTime * this.count, 1 - 1 / this.flickerTime * this.count, 0.01 + 1 / this.flickerTime * this.count);
                }
                if (this.count > this.flickerTime) {
                    this.flag = false;
                }
                else if (this.count <= 0) {
                    this.flag = true;
                }
                if (this.flag) {
                    this.count++;
                }
                else {
                    this.count--;
                }
            };
            FlickerButton.prototype.setBefore = function () {
                _super.prototype.setBefore.call(this);
                this.removeEventListener(egret.Event.ENTER_FRAME, flash.bind(this.overAnimation, this), null);
                this.count = flash.checkInt(0);
                this.bg["transform"].colorTransform = new flash.ColorTransform();
                this.filters = [];
                if (this.parent) {
                    this.parent.addChildAt(this, this.parent.numChildren - 1);
                }
            };
            FlickerButton.prototype.setDown = function () {
                _super.prototype.setDown.call(this);
                this.removeEventListener(egret.Event.ENTER_FRAME, flash.bind(this.overAnimation, this), null);
            };
            return FlickerButton;
        }(iScene.iPanel.iCell.ButtonCell));
        iScene.FlickerButton = FlickerButton;
        __reflect(FlickerButton.prototype, "iPanel.iScene.FlickerButton");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.FlickerButton", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=FlickerButton.js.map