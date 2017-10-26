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
                var TitleWindow = (function (_super) {
                    __extends(TitleWindow, _super);
                    function TitleWindow() {
                        var _this = _super.call(this) || this;
                        var _loc1_ = new iPanel.iScene.iPanel.iWindow.iTitle.TitleOutterPanel();
                        _this.panel = flash.As3As(_loc1_.innerPanel, iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel);
                        _this.addChild(_loc1_);
                        _loc1_.x = 0;
                        _loc1_.y = 0;
                        return _this;
                    }
                    TitleWindow.prototype.update = function () {
                        this.panel.onUpdate();
                    };
                    return TitleWindow;
                }(iPanel.iScene.iPanel.iWindow.Window));
                iWindow.TitleWindow = TitleWindow;
                __reflect(TitleWindow.prototype, "iPanel.iScene.iPanel.iWindow.TitleWindow");
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.TitleWindow", "iPanel.iScene.iPanel.iWindow.Window");
//# sourceMappingURL=TitleWindow.js.map