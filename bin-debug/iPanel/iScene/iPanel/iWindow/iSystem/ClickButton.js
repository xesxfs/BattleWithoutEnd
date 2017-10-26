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
                var iSystem;
                (function (iSystem) {
                    var ClickButton = (function (_super) {
                        __extends(ClickButton, _super);
                        function ClickButton(param1, param2) {
                            var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                            _this.FIX = 20;
                            param2 = flash.checkInt(param2);
                            _this.FIX = flash.checkInt(param2);
                            var _loc3_ = new doubleCircle();
                            _loc3_.width = _this.FIX;
                            _loc3_.height = _this.FIX;
                            _loc3_["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
                            _this.before.addChild(_loc3_);
                            var _loc4_ = new (flash.getDefinitionByName(param1))();
                            _this.before.addChild(_loc4_);
                            _this.setMcPosition(_loc4_);
                            var _loc5_ = new doubleCircle();
                            _loc5_.width = _this.FIX;
                            _loc5_.height = _this.FIX;
                            _this.after.addChild(_loc5_);
                            var _loc6_ = new (flash.getDefinitionByName(param1))();
                            _loc6_["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
                            _this.after.addChild(_loc6_);
                            _this.setMcPosition(_loc6_);
                            return _this;
                        }
                        ClickButton.prototype.setMcPosition = function (param1) {
                            var _loc2_ = NaN;
                            if (param1.width > param1.height) {
                                _loc2_ = this.FIX / 2 / param1.width;
                            }
                            else {
                                _loc2_ = this.FIX / 2 / param1.height;
                            }
                            param1.scaleX = _loc2_;
                            param1.scaleY = _loc2_;
                            param1.x = this.FIX / 2 - param1.width / 2;
                            param1.y = this.FIX / 2 - param1.height / 2;
                        };
                        ClickButton.prototype.setDown = function () {
                            _super.prototype.setDown.call(this);
                            this.setBefore();
                        };
                        return ClickButton;
                    }(iPanel.iCell.ButtonCell));
                    iSystem.ClickButton = ClickButton;
                    __reflect(ClickButton.prototype, "iPanel.iScene.iPanel.iWindow.iSystem.ClickButton");
                })(iSystem = iWindow.iSystem || (iWindow.iSystem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSystem.ClickButton", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=ClickButton.js.map