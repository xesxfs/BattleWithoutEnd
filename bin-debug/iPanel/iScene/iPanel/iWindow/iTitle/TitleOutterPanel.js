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
                var iTitle;
                (function (iTitle) {
                    var TitleOutterPanel = (function (_super) {
                        __extends(TitleOutterPanel, _super);
                        function TitleOutterPanel() {
                            return _super.call(this, 540) || this;
                        }
                        TitleOutterPanel.prototype.setInnerPanel = function () {
                            this.innerPanel = new iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel();
                            this.addChild(this.innerPanel);
                        };
                        return TitleOutterPanel;
                    }(iPanel.OutterPanel));
                    iTitle.TitleOutterPanel = TitleOutterPanel;
                    __reflect(TitleOutterPanel.prototype, "iPanel.iScene.iPanel.iWindow.iTitle.TitleOutterPanel");
                })(iTitle = iWindow.iTitle || (iWindow.iTitle = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iTitle.TitleOutterPanel", "iPanel.OutterPanel");
//# sourceMappingURL=TitleOutterPanel.js.map