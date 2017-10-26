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
                var iSystem;
                (function (iSystem) {
                    var iMap;
                    (function (iMap) {
                        var MapPanel = (function (_super) {
                            __extends(MapPanel, _super);
                            function MapPanel() {
                                var _this = _super.call(this) || this;
                                var _this = undefined;
                                var backDown = null;
                                var cell = null;
                                backDown = function () {
                                    _this.parent.removeChild(_this);
                                    this["setBefore"]();
                                };
                                _this.bg = new iPanel.iCell.BasicCell(800, 600);
                                _this.addChild(_this.bg);
                                var m = new map_mc();
                                _this.addChild(m);
                                var buttonGroup = new iPanel.iCell.ButtonGroup();
                                var length = flash.checkInt(iData.iMap.MapList.list.length);
                                var i = flash.checkInt(0);
                                while (i < length) {
                                    cell = new MapCell(iData.iMap.MapList.list[i]);
                                    _this.addChild(cell);
                                    buttonGroup.addButton(cell);
                                    if (iData.iMap.MapList.list[i].name == iGlobal.Global.map.mapData.name) {
                                        cell["setAfter"]();
                                        cell["onMouseDown"](null);
                                    }
                                    i++;
                                }
                                var backButton = new iPanel.iScene.FlickerButton("返回", 100, 50);
                                _this.addChild(backButton);
                                backButton.x = 0;
                                backButton.y = 0;
                                backButton.downFunction = backDown;
                                _this = _this;
                                return _this;
                            }
                            return MapPanel;
                        }(egret.Sprite));
                        iMap.MapPanel = MapPanel;
                        __reflect(MapPanel.prototype, "iPanel.iScene.iPanel.iWindow.iSystem.iMap.MapPanel");
                    })(iMap = iSystem.iMap || (iSystem.iMap = {}));
                })(iSystem = iWindow.iSystem || (iWindow.iSystem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSystem.iMap.MapPanel", "egret.Sprite");
//# sourceMappingURL=MapPanel.js.map