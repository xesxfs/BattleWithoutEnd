var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel) {
    var iCell;
    (function (iCell) {
        var InfoWindow = (function (_super) {
            __extends(InfoWindow, _super);
            function InfoWindow(param1, param2) {
                var _this = _super.call(this, param1, param2) || this;
                // param1 = flash.checkInt(param1);
                // param2 = flash.checkInt(param2);
                _this.touchEnabled = false;
                _this.touchChildren = false;
                return _this;
            }
            InfoWindow.prototype.draw = function (param1, param2) {
                // param1 = flash.checkInt(param1);
                // param2 = flash.checkInt(param2);
                // this.graphics.lineStyle(1,13487565,0.8);
                // super.draw(param1,param2);
                // this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
            };
            return InfoWindow;
        }(iPanel.iCell.BasicCell));
        iCell.InfoWindow = InfoWindow;
        __reflect(InfoWindow.prototype, "iPanel.iCell.InfoWindow");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.InfoWindow","iPanel.iCell.BasicCell")
//# sourceMappingURL=InfoWindow.js.map