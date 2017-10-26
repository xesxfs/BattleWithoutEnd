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
            var iAllInfo;
            (function (iAllInfo) {
                var AllInfoOutterPanel = (function (_super) {
                    __extends(AllInfoOutterPanel, _super);
                    function AllInfoOutterPanel() {
                        return _super.call(this, 345, false) || this;
                    }
                    AllInfoOutterPanel.prototype.setInnerPanel = function () {
                        this.innerPanel = new iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel();
                        this.addChild(this.innerPanel);
                    };
                    return AllInfoOutterPanel;
                }(iPanel.OutterPanel));
                iAllInfo.AllInfoOutterPanel = AllInfoOutterPanel;
                __reflect(AllInfoOutterPanel.prototype, "iPanel.iScene.iPanel.iAllInfo.AllInfoOutterPanel");
            })(iAllInfo = iPanel.iAllInfo || (iPanel.iAllInfo = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iAllInfo.AllInfoOutterPanel", "iPanel.OutterPanel");
//# sourceMappingURL=AllInfoOutterPanel.js.map