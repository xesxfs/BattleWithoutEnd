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
                    var ForgeButton = (function (_super) {
                        __extends(ForgeButton, _super);
                        function ForgeButton() {
                            var _this = _super.call(this, "mc_forge", "mc_forge") || this;
                            _this.R = 50;
                            _this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
                            _this.before.height = _this.R;
                            _this.before.width = _this.R;
                            _this.after.height = _this.R;
                            _this.after.width = _this.R;
                            return _this;
                        }
                        return ForgeButton;
                    }(iPanel.iCell.ButtonCell));
                    iItem.ForgeButton = ForgeButton;
                    __reflect(ForgeButton.prototype, "iPanel.iScene.iPanel.iWindow.iItem.ForgeButton");
                })(iItem = iWindow.iItem || (iWindow.iItem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.ForgeButton", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=ForgeButton.js.map