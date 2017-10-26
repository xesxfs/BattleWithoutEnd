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
        var BasicCell = (function (_super) {
            __extends(BasicCell, _super);
            function BasicCell(param1, param2) {
                var _this = _super.call(this) || this;
                // param1 = flash.checkInt(param1);
                // param2 = flash.checkInt(param2);
                _this.draw(param1, param2);
                return _this;
            }
            BasicCell.prototype.draw = function (param1, param2) {
                // param1 = flash.checkInt(param1);
                // param2 = flash.checkInt(param2);
                this.graphics.beginFill(16777215, 0.95);
                this.graphics.drawRect(0, 0, param1, param2);
                this.graphics.endFill();
            };
            return BasicCell;
        }(egret.Sprite));
        iCell.BasicCell = BasicCell;
        __reflect(BasicCell.prototype, "iPanel.iCell.BasicCell");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.BasicCell","egret.Sprite")
//# sourceMappingURL=BasicCell.js.map