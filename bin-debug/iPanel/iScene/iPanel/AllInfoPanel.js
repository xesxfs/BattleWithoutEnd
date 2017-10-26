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
            var AllInfoPanel = (function (_super) {
                __extends(AllInfoPanel, _super);
                function AllInfoPanel() {
                    var _this = _super.call(this, 400, 355) || this;
                    var _loc1_ = new iPanel.iScene.iPanel.iAllInfo.AllInfoOutterPanel();
                    _this.addChild(_loc1_);
                    _loc1_.y = 10;
                    _this.panel = flash.As3As(_loc1_.innerPanel, iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel);
                    return _this;
                }
                AllInfoPanel.prototype.addText = function (param1, param2) {
                    if (param2 === void 0) { param2 = "other"; }
                    if (iGlobal.Global[param2 + "_toggle"]) {
                        this.panel.addText(param1);
                        return;
                    }
                };
                return AllInfoPanel;
            }(iPanel.iCell.BasicCell));
            iPanel.AllInfoPanel = AllInfoPanel;
            __reflect(AllInfoPanel.prototype, "iPanel.iScene.iPanel.AllInfoPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.AllInfoPanel", "iPanel.iCell.BasicCell");
//# sourceMappingURL=AllInfoPanel.js.map