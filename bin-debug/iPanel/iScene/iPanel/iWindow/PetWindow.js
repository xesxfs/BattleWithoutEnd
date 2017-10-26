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
                var PetWindow = (function (_super) {
                    __extends(PetWindow, _super);
                    function PetWindow() {
                        var _this = _super.call(this) || this;
                        _this.textBag = iGlobal.Global.getTextField(32, 7631988);
                        var _loc1_ = new iPanel.iScene.iPanel.iWindow.iPet.PetOutterPanel();
                        _this.addChild(_loc1_);
                        _loc1_.x = 0;
                        _loc1_.y = 40;
                        _this.panel = flash.As3As(_loc1_.innerPanel, iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel);
                        _this.setBagText();
                        _this.addEventListener(tool.MyEvent.Update, flash.bind(_this.updateBagText, _this), null, true);
                        return _this;
                    }
                    PetWindow.prototype.updateBagText = function (param1) {
                        if (param1 === void 0) { param1 = null; }
                        this.textBag.htmlText = "<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>";
                    };
                    PetWindow.prototype.setBagText = function () {
                        var _loc1_ = new iPanel.iCell.BasicCell(200, 40);
                        this.addChild(_loc1_);
                        _loc1_.x = 0;
                        _loc1_.y = 0;
                        this.textBag.width = 200;
                        this.textBag.htmlText = "<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>";
                        _loc1_.addChild(this.textBag);
                    };
                    PetWindow.prototype.update = function () {
                        this.panel.update();
                        this.updateBagText();
                    };
                    return PetWindow;
                }(iPanel.iScene.iPanel.iWindow.Window));
                iWindow.PetWindow = PetWindow;
                __reflect(PetWindow.prototype, "iPanel.iScene.iPanel.iWindow.PetWindow");
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.PetWindow", "iPanel.iScene.iPanel.iWindow.Window");
//# sourceMappingURL=PetWindow.js.map