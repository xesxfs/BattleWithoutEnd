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
                    var ToggleBox = (function (_super) {
                        __extends(ToggleBox, _super);
                        function ToggleBox(param1, param2, param3) {
                            if (param3 === void 0) { param3 = true; }
                            var _this = _super.call(this) || this;
                            _this.size = 0;
                            _this.isDown = false;
                            _this.size = flash.checkInt(param2);
                            _this.text = iGlobal.Global.getTextField(param2);
                            _this.addChild(_this.text);
                            _this.setText(param1);
                            _this.box = new egret.Sprite();
                            _this.addChild(_this.box);
                            if (param3) {
                                _this.setDown();
                            }
                            else {
                                _this.setUp();
                            }
                            _this.box.addEventListener(egret.TouchEvent.TOUCH_BEGIN, flash.bind(_this.onMouseDown, _this), null);
                            return _this;
                        }
                        ToggleBox.prototype.setText = function (param1) {
                            this.text.width = 300;
                            this.text.htmlText = param1;
                            this.text.width = this.text.textWidth + 6;
                            this.text.x = this.size + 2;
                        };
                        ToggleBox.prototype.setDown = function () {
                            this.isDown = true;
                            this.box.graphics.clear();
                            this.box.graphics.lineStyle(2, 7631988);
                            this.box.graphics.beginFill(14922250);
                            this.box.graphics.drawRect(0, 0, this.size, this.size);
                            this.box.graphics.endFill();
                            if (this.downFunction) {
                                this.downFunction();
                            }
                        };
                        ToggleBox.prototype.setUp = function () {
                            this.isDown = false;
                            this.box.graphics.clear();
                            this.box.graphics.beginFill(16777215, 0);
                            this.box.graphics.lineStyle(2, 7631988);
                            this.box.graphics.drawRect(0, 0, this.size, this.size);
                            this.box.graphics.endFill();
                            if (this.upFunction) {
                                this.upFunction();
                            }
                        };
                        ToggleBox.prototype.onMouseDown = function (param1) {
                            if (this.isDown) {
                                this.setUp();
                            }
                            else {
                                this.setDown();
                            }
                        };
                        return ToggleBox;
                    }(egret.Sprite));
                    iSystem.ToggleBox = ToggleBox;
                    __reflect(ToggleBox.prototype, "iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox");
                })(iSystem = iWindow.iSystem || (iWindow.iSystem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox", "egret.Sprite");
//# sourceMappingURL=ToggleBox.js.map