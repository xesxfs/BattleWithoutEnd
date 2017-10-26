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
                var iSkill;
                (function (iSkill) {
                    var MagicOutterPanel = (function (_super) {
                        __extends(MagicOutterPanel, _super);
                        function MagicOutterPanel() {
                            return _super.call(this, 515) || this;
                        }
                        MagicOutterPanel.prototype.setInnerPanel = function () {
                            this.innerPanel = new iPanel.iScene.iPanel.iWindow.iSkill.MagicInnerPanel();
                            this.addChild(this.innerPanel);
                        };
                        return MagicOutterPanel;
                    }(iPanel.OutterPanel));
                    iSkill.MagicOutterPanel = MagicOutterPanel;
                    __reflect(MagicOutterPanel.prototype, "iPanel.iScene.iPanel.iWindow.iSkill.MagicOutterPanel");
                })(iSkill = iWindow.iSkill || (iWindow.iSkill = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.MagicOutterPanel", "iPanel.OutterPanel");
//# sourceMappingURL=MagicOutterPanel.js.map