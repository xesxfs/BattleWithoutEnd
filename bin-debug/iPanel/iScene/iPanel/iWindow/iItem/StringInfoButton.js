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
                var iItem;
                (function (iItem) {
                    var StringInfoButton = (function (_super) {
                        __extends(StringInfoButton, _super);
                        function StringInfoButton(param1, param2) {
                            var _this = _super.call(this, param1, param2) || this;
                            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, flash.bind(_this.onMouseDown, _this), null);
                            return _this;
                        }
                        StringInfoButton.prototype.onMouseOver = function (param1) {
                            _super.prototype.onMouseOver.call(this, param1);
                            this.graphics.clear();
                            this.graphics.beginFill(14922250, 0.95);
                            this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
                            this.graphics.endFill();
                            this.textField.htmlText = "<font color=\'#ffffff\'>" + this.textField.text + "</font>";
                        };
                        StringInfoButton.prototype.onMouseOut = function (param1) {
                            _super.prototype.onMouseOut.call(this, param1);
                            this.graphics.clear();
                            this.graphics.beginFill(16777215, 0.95);
                            this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
                            this.graphics.endFill();
                            this.textField.htmlText = "<font color=\'#747474\'>" + this.textField.text + "</font>";
                        };
                        StringInfoButton.prototype.onMouseDown = function (param1) {
                            if (this.downFunction) {
                                this.downFunction();
                            }
                        };
                        return StringInfoButton;
                    }(iPanel.iCell.StringInfoCell));
                    iItem.StringInfoButton = StringInfoButton;
                    __reflect(StringInfoButton.prototype, "iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton");
                })(iItem = iWindow.iItem || (iWindow.iItem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton", "iPanel.iCell.StringInfoCell");
//# sourceMappingURL=StringInfoButton.js.map