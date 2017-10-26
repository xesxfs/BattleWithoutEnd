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
        var ItemInfoWindow = (function (_super) {
            __extends(ItemInfoWindow, _super);
            function ItemInfoWindow(param1) {
                var _this = _super.call(this, 0, 0) || this;
                _this.text = iGlobal.Global.getTextField(24);
                _this.text.multiline = true;
                _this.addChild(_this.text);
                _this.text.text = param1;
                return _this;
            }
            ItemInfoWindow.prototype.draw = function (param1, param2) {
                // param1 = flash.checkInt(param1);
                // param2 = flash.checkInt(param2);
                this.graphics.clear();
                this.text.width = 130;
                _super.prototype.draw.call(this, 130, this.text.textHeight + 5);
            };
            Object.defineProperty(ItemInfoWindow.prototype, "TEXT", {
                set: function (param1) {
                    this.text.text = param1;
                    this.draw(0, 0);
                },
                enumerable: true,
                configurable: true
            });
            return ItemInfoWindow;
        }(iPanel.iCell.InfoWindow));
        iCell.ItemInfoWindow = ItemInfoWindow;
        __reflect(ItemInfoWindow.prototype, "iPanel.iCell.ItemInfoWindow");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.ItemInfoWindow","iPanel.iCell.InfoWindow")
//# sourceMappingURL=ItemInfoWindow.js.map