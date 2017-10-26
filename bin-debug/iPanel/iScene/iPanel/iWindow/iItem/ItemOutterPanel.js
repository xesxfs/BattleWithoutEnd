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
                    var ItemOutterPanel = (function (_super) {
                        __extends(ItemOutterPanel, _super);
                        function ItemOutterPanel() {
                            return _super.call(this, 360, false) || this;
                        }
                        ItemOutterPanel.prototype.setInnerPanel = function () {
                            this.innerPanel = new iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel();
                            this.addChild(this.innerPanel);
                        };
                        return ItemOutterPanel;
                    }(iPanel.OutterPanel));
                    iItem.ItemOutterPanel = ItemOutterPanel;
                    __reflect(ItemOutterPanel.prototype, "iPanel.iScene.iPanel.iWindow.iItem.ItemOutterPanel");
                })(iItem = iWindow.iItem || (iWindow.iItem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.ItemOutterPanel", "iPanel.OutterPanel");
//# sourceMappingURL=ItemOutterPanel.js.map