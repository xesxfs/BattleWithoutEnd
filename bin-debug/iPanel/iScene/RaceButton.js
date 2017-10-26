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
        var RaceButton = (function (_super) {
            __extends(RaceButton, _super);
            function RaceButton(param1, param2, param3) {
                var _this = _super.call(this, param1, param2) || this;
                _this.PX = 50;
                _this.count = 0;
                _this.bg = new egret.Sprite();
                _this.race = param3;
                _this.addChild(_this.bg);
                _this.before.width = _this.PX;
                _this.before.height = _this.PX;
                _this.after.height = _this.PX;
                _this.after.width = _this.PX;
                _this.setText();
                return _this;
            }
            RaceButton.prototype.setText = function () {
                this.text = iGlobal.Global.getTextField(32, 16777215);
                this.text.width = 200;
                this.text.text = this.race.name.toUpperCase();
                this.addChild(this.text);
                this.text.x = 100;
                this.text.y = 5;
                this.text.visible = false;
            };
            RaceButton.prototype.setAfter = function () {
                _super.prototype.setAfter.call(this);
                this.addEventListener(egret.Event.ENTER_FRAME, flash.bind(this.overAnimation, this), null);
            };
            RaceButton.prototype.overAnimation = function (param1) {
                if (this.count <= 10) {
                    this.bg.graphics.clear();
                    this.bg.graphics.beginFill(16777215, 0.95);
                    this.bg.graphics.drawRect(0 - this.count, 0 - this.count, this.PX + this.count * 2, this.PX + this.count * 2);
                    this.bg.graphics.endFill();
                    this.bg.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
                    this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.01 * this.count, 1 - 0.03 * this.count, 1 - 0.1 * this.count, 0.1 * this.count);
                }
                if (this.count > 10) {
                    this.bg.graphics.clear();
                    this.bg.graphics.beginFill(16777215, 0.95);
                    this.bg.graphics.drawRect(-10, -10, this.PX + 20 + 20 * (this.count - 10), this.PX + 20);
                    this.bg.graphics.endFill();
                    this.bg.filters = [new flash.GlowFilter(5066061, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1)];
                    this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 0.95);
                    this.text.visible = true;
                    this.text.alpha = (this.count - 10) * 0.1;
                    this.text.filters = [new flash.GlowFilter(16777215, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1)];
                }
                this.count++;
                if (this.count > 20) {
                    this.removeEventListener(egret.Event.ENTER_FRAME, flash.bind(this.overAnimation, this), null);
                }
            };
            RaceButton.prototype.setBefore = function () {
                _super.prototype.setBefore.call(this);
                this.bg.graphics.clear();
                this.removeEventListener(egret.Event.ENTER_FRAME, flash.bind(this.overAnimation, this), null);
                this.count = flash.checkInt(0);
                this.filters = [];
                this.text.visible = false;
            };
            RaceButton.prototype.setDown = function () {
                _super.prototype.setDown.call(this);
                this.filters = [new flash.GlowFilter(10027008, 0.66, 23, 23)];
            };
            return RaceButton;
        }(iScene.iPanel.iCell.ButtonCell));
        iScene.RaceButton = RaceButton;
        __reflect(RaceButton.prototype, "iPanel.iScene.RaceButton");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.RaceButton", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=RaceButton.js.map