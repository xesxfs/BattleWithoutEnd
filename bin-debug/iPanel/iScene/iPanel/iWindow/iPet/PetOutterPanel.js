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
                var iPet;
                (function (iPet) {
                    var PetOutterPanel = (function (_super) {
                        __extends(PetOutterPanel, _super);
                        function PetOutterPanel() {
                            return _super.call(this, 495, false) || this;
                        }
                        PetOutterPanel.prototype.setInnerPanel = function () {
                            this.innerPanel = new iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel();
                            this.addChild(this.innerPanel);
                        };
                        return PetOutterPanel;
                    }(iPanel.OutterPanel));
                    iPet.PetOutterPanel = PetOutterPanel;
                    __reflect(PetOutterPanel.prototype, "iPanel.iScene.iPanel.iWindow.iPet.PetOutterPanel");
                })(iPet = iWindow.iPet || (iWindow.iPet = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetOutterPanel", "iPanel.OutterPanel");
//# sourceMappingURL=PetOutterPanel.js.map